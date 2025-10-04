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

	return (
		<div className="px-14  my-32">
			<div className="pt-14 flex justify-between items-center  pb-4">
				<div className="flex items-center h-6 gap-2 ">
					<div className="border-3 rounded-lg bg-[#F54A00] h-full w-2"></div>
					<div className="text-[#F54A00] text-[20px] font-semibold">
						Wishlist ({product.length})
					</div>
				</div>
				<div className="border border-black p-3 px-8 rounded-md font-semibold">
					Move to Bag
				</div>
			</div>
			{product.length > 0 ? (
				<div className="grid grid-cols-4 gap-8 mt-8 mb-32">
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
					<h2 className="text-2xl font-medium">Your wishlist is empty</h2>
					<p className="text-gray-500">
						Add items to your wishlist by clicking the heart icon
					</p>
				</div>
			)}

			<div className="pt-14 flex justify-between items-center  pb-4">
				<div className="flex items-center h-6 gap-2 ">
					<div className="border-3 rounded-lg bg-[#F54A00] h-full w-2"></div>
					<div className="text-[#F54A00] text-[20px] font-semibold">
						Just for you
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
};

export default Wishlist;
