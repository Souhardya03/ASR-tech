import { products } from "../../data";
import { ProductCard } from "../../components/ProductCard";
import { useEffect, useState } from "react";

const Wishlist = () => {
	useEffect(() => {
		loadWishlist();
	}, []);
	const [product, setProducts] = useState([]);

	const loadWishlist = () => {
		const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
		const filteredProducts = products.filter((product) =>
			wishlist.includes(product.id)
		);
		setProducts(filteredProducts);
	};

	const handleWishlistChange = () => {
		loadWishlist();
	};

	const moveAllToCart = () => {
		const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
		let cart = JSON.parse(localStorage.getItem("cart")) || [];

		const cartIds = cart.map((item) => item.id);
		const newItems = wishlist
			.filter((item) => !cartIds.includes(item.id))
			.map((item) => ({ id:item, quantity: 1 }));
		cart = [...cart, ...newItems];
		localStorage.setItem("cart", JSON.stringify(cart));
		localStorage.setItem("wishlist", JSON.stringify([]));
		setProducts([]);
		window.dispatchEvent(new Event("cartUpdated"));
		window.dispatchEvent(new Event("wishlistUpdated"));
	};

	return (
		<div className="xl:px-14  lg:px-6 px-4 my-8 xl:my-28 md:my-20">
			<div className="pt-14 flex justify-between items-center  lg:pb-4">
				<div className="flex items-center h-6 gap-2 ">
					<div className="border-3 rounded-lg bg-[#F54A00] h-full w-2"></div>
					<div className="text-[#F54A00] text-[20px] font-semibold">
						Wishlist ({product.length})
					</div>
				</div>
				<div
					onClick={moveAllToCart}
					className="border cursor-pointer border-black text-sm lg:text-lg lg:p-3 lg:px-8 p-2 rounded-md font-semibold">
					Move to Bag
				</div>
			</div>
			{product.length > 0 ? (
				<div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 xl:gap-8 xl:mt-8 lg:mb-6 xl:mb-32">
					{product.map((product) => (
						<ProductCard
							key={product.id}
							{...product}
							onWishlistChange={handleWishlistChange}
						/>
					))}
				</div>
			) : (
				<div className="flex flex-col items-center justify-center h-[40vh] gap-4">
					<h2 className="md:text-2xl text-xl font-medium">
						Your wishlist is empty
					</h2>
					<p className="text-gray-500 md:text-lg text-sm text-center">
						Add items to your wishlist by clicking the heart icon
					</p>
				</div>
			)}

			<div className="pt-14 flex justify-between items-center  lg:pb-4">
				<div className="flex items-center h-6 gap-2 ">
					<div className="border-3 rounded-lg bg-[#F54A00] h-full w-2"></div>
					<div className="text-[#F54A00] text-[20px] font-semibold">
						Just for you
					</div>
				</div>
			</div>
			<div className="grid md:grid-cols-4 grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:gap-8 gap-2 xl:mt-8">
				{products.slice(0, 4).map((product) => (
					<ProductCard
						key={product.id}
						{...product}
					/>
				))}
			</div>
		</div>
	);
};

export default Wishlist;
