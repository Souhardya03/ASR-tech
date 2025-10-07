import React, { useEffect, useState } from "react";
import { products } from "../../data";

export default function CheckoutPage() {
	const [formData, setFormData] = useState({
		firstName: "",
		companyName: "",
		streetAddress: "",
		apartment: "",
		city: "",
		phoneNumber: "",
		emailAddress: "",
		saveInfo: true,
	});

	const [paymentMethod, setPaymentMethod] = useState("cash");
	const [couponCode, setCouponCode] = useState("");

	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		let storedCart = [];
		try {
			const cartData = localStorage.getItem("cart");
			storedCart = cartData ? JSON.parse(cartData) : [];
		} catch (e) {
			storedCart = [];
			console.error("Failed to parse cart from localStorage:", e);
		}

		const updatedCartItems = products
			.filter((product) => storedCart.some((item) => item.id === product.id))
			.map((product) => {
				const storedItem = storedCart.find((item) => item.id === product.id);
				return {
					...product,
					quantity: storedItem ? storedItem.quantity : 1,
				};
			});

		setCartItems(updatedCartItems);
	}, []);

	const product = {
		name: "S-Series Comfort Mouse",
		price: 750.0,
		quantity: 2,
		image: "mouse",
	};

	const subtotal = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
	const shipping = "Free";
	const total = subtotal + (shipping === "Free" ? 0 : shipping);

	return (
		<div className=" md:mt-28 xl:px-16 lg:px-6 my-20 bg-white">
			<div className=" mx-auto px-4 md:py-8">
				{/* Breadcrumb */}
				<div className="flex items-center gap-1 md:gap-2 text-xs md:text-lg mb-4 md:mb-12 text-gray-500">
					<span>Account</span>
					<span>/</span>
					<span>My Account</span>
					<span>/</span>
					<span>Product</span>
					<span>/</span>
					<span>View Cart</span>
					<span>/</span>
					<span className="text-black">CheckOut</span>
				</div>

				{/* Main Content */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 md:gap-16">
					{/* Left Side - Billing Details */}
					<div>
						<h1 className="md:text-4xl text-2xl font-medium mb-4 md:mb-12">
							Billing Details
						</h1>

						<div className="md:space-y-8 space-y-3">
							{/* First Name */}
							<div>
								<label className="block text-sm md:text-lg mb-2">
									First Name<span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									name="firstName"
									value={formData.firstName}
									onChange={handleInputChange}
									className="w-full px-4 py-3 bg-gray-100 rounded"
									required
								/>
							</div>

							{/* Company Name */}
							<div>
								<label className="block text-sm md:text-lg mb-2">
									Company Name
								</label>
								<input
									type="text"
									name="companyName"
									value={formData.companyName}
									onChange={handleInputChange}
									className="w-full px-4 py-3 bg-gray-100 rounded"
								/>
							</div>

							{/* Street Address */}
							<div>
								<label className="block text-sm md:text-lg mb-2">
									Street Address<span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									name="streetAddress"
									value={formData.streetAddress}
									onChange={handleInputChange}
									className="w-full px-4 py-3 bg-gray-100 rounded"
									required
								/>
							</div>

							{/* Apartment */}
							<div>
								<label className="block text-sm md:text-lg mb-2">
									Apartment, floor, etc. (optional)
								</label>
								<input
									type="text"
									name="apartment"
									value={formData.apartment}
									onChange={handleInputChange}
									className="w-full px-4 py-3 bg-gray-100 rounded"
								/>
							</div>

							{/* Town/City */}
							<div>
								<label className="block text-sm md:text-lg mb-2">
									Town/City<span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									name="city"
									value={formData.city}
									onChange={handleInputChange}
									className="w-full px-4 py-3 bg-gray-100 rounded"
									required
								/>
							</div>

							{/* Phone Number */}
							<div>
								<label className="block text-sm md:text-lg mb-2">
									Phone Number<span className="text-red-500">*</span>
								</label>
								<input
									type="tel"
									name="phoneNumber"
									value={formData.phoneNumber}
									onChange={handleInputChange}
									className="w-full px-4 py-3 bg-gray-100 rounded"
									required
								/>
							</div>

							{/* Email Address */}
							<div>
								<label className="block text-sm md:text-lg mb-2">
									Email Address<span className="text-red-500">*</span>
								</label>
								<input
									type="email"
									name="emailAddress"
									value={formData.emailAddress}
									onChange={handleInputChange}
									className="w-full px-4 py-3 bg-gray-100 rounded"
									required
								/>
							</div>

							{/* Save Info Checkbox */}
							<div className="flex items-center md:gap-3 gap-1">
								<input
									type="checkbox"
									id="saveInfo"
									name="saveInfo"
									checked={formData.saveInfo}
									onChange={handleInputChange}
									className="md:w-5 w-4 h-4 md:h-5 accent-red-500"
								/>
								<label
									htmlFor="saveInfo"
									className="md:text-sm text-xs">
									Save this information for faster check-out next time
								</label>
							</div>
						</div>
					</div>

					{/* Right Side - Order Summary */}
					<div className="md:pt-20">
						{/* Product */}
						{cartItems.map((product, index) => (
							<div className="flex items-center justify-between mb-8">
								<div className="flex items-center gap-4">
									<div className="relative">
										<div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
											<img
												src={product.image}
												alt=""
											/>
										</div>
										<div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
											{product.quantity}
										</div>
									</div>
									<span className="text-xl">{product.name}</span>
								</div>
								<span className="font-normal">
									${(product.price * product.quantity).toFixed(2)}
								</span>
							</div>
						))}

						{/* Order Summary */}
						<div className="space-y-4 mb-6">
							<div className="flex justify-between py-4 border-b border-gray-300">
								<span>Subtotal:</span>
								<span>${subtotal.toFixed(2)}</span>
							</div>
							<div className="flex justify-between py-4 border-b border-gray-300">
								<span>Shipping:</span>
								<span>{shipping}</span>
							</div>
							<div className="flex justify-between py-4">
								<span>Total:</span>
								<span className="font-medium">${total.toFixed(2)}</span>
							</div>
						</div>

						{/* Payment Method */}
						<div className="space-y-4 mb-6">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-3">
									<input
										type="radio"
										id="bank"
										name="payment"
										value="bank"
										checked={paymentMethod === "bank"}
										onChange={(e) => setPaymentMethod(e.target.value)}
										className="w-5 h-5 accent-black"
									/>
									<label htmlFor="bank">Bank</label>
								</div>
								<div className="flex items-center gap-2">
									<img
										src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='25' viewBox='0 0 40 25'%3E%3Crect width='40' height='25' rx='3' fill='%23eb001b'/%3E%3C/svg%3E"
										alt="bKash"
										className="h-6"
									/>
									<img
										src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='25' viewBox='0 0 40 25'%3E%3Crect width='40' height='25' rx='3' fill='%231434CB'/%3E%3C/svg%3E"
										alt="Visa"
										className="h-6"
									/>
									<img
										src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='25' viewBox='0 0 40 25'%3E%3Crect width='40' height='25' rx='3' fill='%23EB001B'/%3E%3Ccircle cx='15' cy='12.5' r='8' fill='%23FF5F00'/%3E%3Ccircle cx='25' cy='12.5' r='8' fill='%23EB001B'/%3E%3C/svg%3E"
										alt="Mastercard"
										className="h-6"
									/>
									<img
										src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='25' viewBox='0 0 40 25'%3E%3Crect width='40' height='25' rx='3' fill='%23FF6000'/%3E%3C/svg%3E"
										alt="Nagad"
										className="h-6"
									/>
								</div>
							</div>

							<div className="flex items-center gap-3">
								<input
									type="radio"
									id="cash"
									name="payment"
									value="cash"
									checked={paymentMethod === "cash"}
									onChange={(e) => setPaymentMethod(e.target.value)}
									className="w-5 h-5 accent-black"
								/>
								<label htmlFor="cash">Cash on delivery</label>
							</div>
						</div>

						{/* Coupon Code */}
						<div className="flex flex-col md:flex-row gap-4 mb-6">
							<input
								type="text"
								placeholder="Coupon Code"
								value={couponCode}
								onChange={(e) => setCouponCode(e.target.value)}
								className="flex-1 px-6 py-4 border border-gray-900 rounded"
							/>
							<button className="px-12 py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded">
								Apply Coupon
							</button>
						</div>

						{/* Place Order Button */}
						<button className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded">
							Place Order
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
