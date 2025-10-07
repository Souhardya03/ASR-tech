import React from "react";
import CategoryCard from "../../components/CategoryCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { products } from "../../data";
import { ProductCard } from "../../components/ProductCard";

const Products = () => {
	const scroll = (id, offset) => {
		const el = document.getElementById(id);
		if (el) el.scrollBy({ left: offset, behavior: "smooth" });
	};
	return (
		<div className="md:my-24 px-4 my-12 lg:px-6 md:px-16 xl:px-16">
			<div className="pt-8">
				<div className="flex items-center h-6 gap-2 ">
					<div className="border-3 rounded-lg bg-[#F54A00] h-full w-2"></div>
					<div className="text-[#F54A00] md:text-[20px] text-[16px] font-medium">
						Categories
					</div>
				</div>
				<div className="flex flex-col md:flex-row w-full justify-between mt-6 items-center">
					<div className=" text-[20px] md:text-[36px] w-full font-medium">
						Browse By Category
					</div>

					<div className="flex text-xl  justify-end  w-full items-center gap-2 md:gap-4">
						<div
							onClick={() => scroll("category-scroll", -200)}
							className="bg-[#f2f2f9] flex items-center justify-center md:h-12 md:w-12 w-8 h-8 rounded-full ">
							<FaArrowLeft size={16} />
						</div>
						<div
							onClick={() => scroll("category-scroll", 200)}
							className="bg-[#f2f2f9] flex items-center justify-center md:h-12 md:w-12 w-8 h-8 rounded-full">
							<FaArrowRight size={16} />
						</div>
					</div>
				</div>

				{/* Category Cards */}
				<CategoryCard />
			</div>
			<div className="lg:py-8">
				<div className="flex items-center h-6 gap-2 mt-8 ">
					<div className="border-3 rounded-lg bg-[#F54A00] h-full w-2"></div>
					<div className="text-[#F54A00] text-[20px] font-medium">
						Our Products
					</div>
				</div>
				<div className="flex w-full flex-col md:flex-row justify-between mt-6  items-center">
					<div className="flex w-full items-center gap-16">
						<div className="text-[20px] md:text-[36px] font-medium">
							Explore our Products
						</div>
					</div>
					<div className="flex text-xl w-full justify-end items-center gap-2 md:gap-4">
						<div
							onClick={() => scroll("products-scroll", -200)}
							className="bg-[#f2f2f9] flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full">
							<FaArrowLeft size={16} />
						</div>
						<div
							onClick={() => scroll("products-scroll", 200)}
							className="bg-[#f2f2f9] flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full">
							<FaArrowRight size={16} />
						</div>
					</div>
				</div>
				{/* Shopping Cards */}
				<div className="md:grid hidden md:grid-cols-4 grid-cols-2 gap-2 xl:gap-8 lg:gap-4 md:mt-8">
					{products.map((product) => (
						<ProductCard
							key={product.id}
							{...product}
						/>
					))}
				</div>

				<div
					id="products-scroll"
					className="md:hidden flex overflow-x-auto gap-2 scroll-smooth snap-x snap-mandatory md:pb-4 no-scrollbar">
					{products.map((product) => (
						<div
							key={product.id}
							className="snap-start flex-shrink-0 w-[48%]">
							<ProductCard {...product} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Products;
