import React from "react";
import CategoryCard from "../../components/CategoryCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { products } from "../../data";
import { ProductCard } from "../../components/ProductCard";

const Products = () => {
	return (
		<div className="my-32 px-16">
			<div className="pt-8">
				<div className="flex items-center h-6 gap-2 ">
					<div className="border-3 rounded-lg bg-[#F54A00] h-full w-2"></div>
					<div className="text-[#F54A00] text-[20px] font-medium">
						Categories
					</div>
				</div>
				<div className="flex w-full justify-between mt-6 items-center">
					<div className=" text-[36px] w-full font-medium">
						Browse By Category
					</div>

					<div className="flex text-xl  justify-end  w-full items-center gap-4">
						<div className="bg-[#f2f2f9] flex items-center justify-center w-12 h-12 rounded-full ">
							<FaArrowLeft />
						</div>
						<div className="bg-[#f2f2f9] flex items-center justify-center w-12 h-12 rounded-full">
							<FaArrowRight />
						</div>
					</div>
				</div>

				{/* Category Cards */}
				<CategoryCard />
			</div>
			<div className="py-8">
				<div className="flex items-center h-6 gap-2 mt-8 ">
					<div className="border-3 rounded-lg bg-[#F54A00] h-full w-2"></div>
					<div className="text-[#F54A00] text-[20px] font-medium">
						Our Products
					</div>
				</div>
				<div className="flex w-full justify-between mt-6 gap-16 items-center">
					<div className="flex w-full items-center gap-16">
						<div className=" text-[36px] font-medium">Explore our Products</div>
					</div>
					<div className="flex text-xl justify-end items-center gap-4">
						<div className="bg-[#f2f2f9] flex items-center justify-center w-12 h-12 rounded-full">
							<FaArrowLeft />
						</div>
						<div className="bg-[#f2f2f9] flex items-center justify-center w-12 h-12 rounded-full">
							<FaArrowRight />
						</div>
					</div>
				</div>
				{/* Shopping Cards */}
				<div className="grid grid-cols-4 gap-8 mt-8">
					{products.map((product) => (
						<ProductCard
							key={product.id}
							{...product}
						/>
					))}
				</div>
				
			</div>
		</div>
	);
};

export default Products;
