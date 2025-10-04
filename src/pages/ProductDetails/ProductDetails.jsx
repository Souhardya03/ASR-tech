import React, { useEffect, useState } from "react";
import { Heart, Truck, RotateCcw } from "lucide-react";
import { products } from "../../data";
import { ProductCard } from "../../components/ProductCard";
import { useParams } from "react-router-dom";
import {
	FaHeart,
	FaRegHeart,
	FaRegStar,
	FaStar,
	FaStarHalfAlt,
} from "react-icons/fa";

export default function ProductDetailsPage() {
	const [selectedColor, setSelectedColor] = useState("blue");
	const [selectedSize, setSelectedSize] = useState("8");
	const [quantity, setQuantity] = useState(1);
	const [mainImage, setMainImage] = useState(0);

	const thumbnails = [0, 1, 2, 3];

	const { id } = useParams();
	const product = products.find((p) => p.id === parseInt(id));
	const [inCart, setInCart] = useState(false);
	const [inWishlist, setInWishlist] = useState(false);

	useEffect(() => {
		const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
		setInWishlist(wishlist.includes(parseInt(id)));
		const cart = JSON.parse(localStorage.getItem("cart")) || [];
		setInCart(cart.includes(parseInt(id)));
	}, [id]);
	
	const toggleCart = () => {
		let cart = JSON.parse(localStorage.getItem("cart")) || [];
		const id1 = parseInt(id);
		if (cart.includes(id1)) {
			cart = cart.filter((item) => item !== id1);
			setInCart(false);
		} else {
			cart.push(id1);
			setInCart(true);
		}
		localStorage.setItem("cart", JSON.stringify(cart));
	};

	return (
		<div className="px-14 my-32 bg-white">
			{/* Breadcrumb */}
			<div className=" mx-auto px-4 py-4">
				<div className="flex items-center gap-2 text-lg text-gray-600">
					<span>Home</span>
					<span>/</span>
					<span>Headphones</span>
					<span>/</span>
					<span className="text-black">{product.name}</span>
				</div>
			</div>

			{/* Main Content */}
			<div className=" mx-auto px-4 py-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Left Side - Images */}
					<div className="flex gap-4">
						{/* Thumbnails */}
						<div className="flex flex-col gap-4">
							{thumbnails.map((index) => (
								<button
									key={index}
									onClick={() => setMainImage(index)}
									className={`w-20 h-20 bg-gray-100 rounded flex items-center justify-center overflow-hidden ${
										mainImage === index ? "ring-2 ring-orange-500" : ""
									}`}>
									<div className="w-full h-full bg-gray-200 flex items-center justify-center">
										<img
											src={product.image}
											alt=""
										/>
									</div>
								</button>
							))}
						</div>

						{/* Main Image */}
						<div className="flex-1 bg-gray-100 rounded-lg flex items-center justify-center p-8">
							<div className="w-full h-full flex items-center justify-center">
								<img
									src={product.image}
									alt=""
									width={500}
									height={500}
								/>
							</div>
						</div>
					</div>

					{/* Right Side - Product Details */}
					<div className="flex flex-col">
						<h1 className="text-4xl font-semibold mb-3">{product.name}</h1>

						{/* Rating and Stock */}
						<div className="flex items-center gap-3 mb-4">
							<div className="flex items-center text-lg gap-1">
								<Rating rating={product.rating} />
							</div>
							<span className="text-gray-500">({product.reviews})</span>
							<span className="text-gray-300">|</span>
							<span className="text-green-500 font-medium">In stock</span>
						</div>

						{/* Price */}
						<div className="flex items-center gap-3 mb-6">
							<span className="text-3xl font-normal">$ {product.price}</span>
							<span className="text-gray-400 line-through">
								$ {product.oldPrice}
							</span>
						</div>

						{/* Description */}
						<p className="text-gray-700 mb-6 pb-6 border-b">
							Comfortable everyday sneakers with breathable fabric and durable
							sole.
						</p>

						{/* Colors */}
						<div className="mb-6">
							<div className="flex items-center gap-4 mb-3">
								<span className="text-lg">Colors:</span>
								<div className="flex gap-2">
									<button
										onClick={() => setSelectedColor("blue")}
										className={`w-8 h-8 rounded-full bg-blue-300 ${
											selectedColor === "blue"
												? "ring-2 ring-offset-2 ring-blue-500"
												: ""
										}`}
									/>
									<button
										onClick={() => setSelectedColor("red")}
										className={`w-8 h-8 rounded-full bg-red-400 ${
											selectedColor === "red"
												? "ring-2 ring-offset-2 ring-red-500"
												: ""
										}`}
									/>
								</div>
							</div>
						</div>

						{/* Size */}
						<div className="mb-6">
							<div className="flex items-center gap-4 mb-3">
								<span className="text-lg">Size:</span>
								<div className="flex gap-2">
									{["7", "8", "9", "10", "11"].map((size) => (
										<button
											key={size}
											onClick={() => setSelectedSize(size)}
											className={`w-12 h-10 rounded border flex items-center justify-center font-medium ${
												selectedSize === size
													? "bg-orange-500 text-white border-orange-500"
													: "border-gray-300 hover:border-gray-400"
											}`}>
											{size}
										</button>
									))}
								</div>
							</div>
						</div>

						{/* Quantity and Buy Button */}
						<div className="flex gap-4 mb-6">
							<div className="flex border border-gray-300 rounded">
								<button
									onClick={() => setQuantity(Math.max(1, quantity - 1))}
									className="w-12 h-12 flex items-center justify-center hover:bg-gray-50">
									−
								</button>
								<input
									type="number"
									value={quantity}
									onChange={(e) =>
										setQuantity(Math.max(1, parseInt(e.target.value) || 1))
									}
									className="w-20 h-12 text-center border-x border-gray-300 outline-none"
								/>
								<button
									onClick={() => setQuantity(quantity + 1)}
									className="w-12 h-12 flex items-center justify-center hover:bg-gray-50">
									+
								</button>
							</div>
							{inCart ? (
								<button className="flex-1 text-lg bg-green-500 hover:bg-green-600 text-white font-medium rounded h-12">
									Go to Cart
								</button>
							) : (
								<button
									onClick={toggleCart}
									className="flex-1 text-lg bg-orange-500 hover:bg-orange-600 text-white font-medium rounded h-12">
									Buy Now
								</button>
							)}

							<button className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50">
								{inWishlist ? (
									<FaHeart
										size={18}
										color="red"
									/>
								) : (
									<FaRegHeart size={18} />
								)}
							</button>
						</div>

						{/* Delivery Info */}
						<div className="border border-gray-300 rounded-lg divide-y">
							<div className="p-4 flex gap-4">
								<Truck className="w-10 h-10 flex-shrink-0" />
								<div>
									<h3 className="font-semibold mb-1">Free Delivery</h3>
									<p className="text-sm text-gray-600">
										Enter your postal code for Delivery Availability
									</p>
								</div>
							</div>
							<div className="p-4 flex gap-4">
								<RotateCcw className="w-10 h-10 flex-shrink-0" />
								<div>
									<h3 className="font-semibold mb-1">Return Delivery</h3>
									<p className="text-sm text-gray-600">
										Free 30 Days Delivery Returns. Details
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="pt-14 flex justify-between items-center  pb-4">
				<div className="flex items-center h-6 gap-2 ">
					<div className="border-3 rounded-lg bg-[#F54A00] h-full w-2"></div>
					<div className="text-[#F54A00] text-[25px] font-semibold">
						Related Products
					</div>
				</div>
			</div>
			<div className="grid grid-cols-4 gap-8 mt-8">
				{products.slice(0, 4).map((product) => (
					<ProductCard
						key={product.id}
						{...product}
					/>
				))}
			</div>
		</div>
	);
}
const Rating = ({ rating }) => {
	const stars = [];
	for (let i = 1; i <= 5; i++) {
		if (rating >= i) {
			stars.push(
				<FaStar
					key={i}
					className="text-yellow-500"
				/>
			);
		} else if (rating >= i - 0.5) {
			stars.push(
				<FaStarHalfAlt
					key={i}
					className="text-yellow-500"
				/>
			);
		} else {
			stars.push(
				<FaRegStar
					key={i}
					className="text-yellow-500"
				/>
			);
		}
	}
	return <div className="flex">{stars}</div>;
};
