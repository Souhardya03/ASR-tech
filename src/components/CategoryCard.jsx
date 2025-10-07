import React, { useState } from "react";
import { categories, products } from "../data";
import { ProductCard } from "./ProductCard";

const CategoryCard = () => {
	const [categoriesId, setCategoriesId] = useState(null);
	const categoriesData = categoriesId
		? products.filter((product) => product.categoryId === categoriesId)
		: null;
	const CategoryCard = ({ id, image, name, setCategoriesId, categoriesId }) => {
		return (
			<>
				<div
					onClick={() => setCategoriesId(id)}
					className={`h-[100px] md:h-[120px]  lg:w-full lg:h-[150px] ${
						categoriesId === id ? "bg-[#fb2c36]" : ""
					} cursor-pointer group hover:bg-[#fb2c36]  duration-150 border my-4 flex flex-col justify-center gap-2 rounded-md border-gray-400`}>
					<div className="flex items-center lg:p-2 justify-center">
						<img
							src={image}
							alt=""
							className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
						/>
					</div>
					<h2
						className={`text-center ${
							categoriesId === id ? "text-white" : ""
						} group-hover:text-white text-sm md:text-lg pb-2`}>
						{name}
					</h2>
				</div>
			</>
		);
	};
	return (
		<div>
			<div className="md:grid hidden grid-cols-2 md:grid-cols-6 xl:gap-8 gap-2 md:mt-8">
				{categories.map((category) => (
					<CategoryCard
						key={category.id}
						{...category}
						setCategoriesId={setCategoriesId}
						categoriesId={categoriesId}
					/>
				))}
			</div>

			<div
				id="category-scroll"
				className="md:hidden flex overflow-x-auto gap-2 scroll-smooth snap-x snap-mandatory pb-4 no-scrollbar">
				{categories.map((category) => (
					<div
						key={category.id}
						className="snap-start flex-shrink-0 w-[48%]">
						<CategoryCard
							key={category.id}
							{...category}
							setCategoriesId={setCategoriesId}
							categoriesId={categoriesId}
						/>
					</div>
				))}
			</div>
			{categoriesData && categoriesData.length === 0 && (
				<div className="h-[30vh] bg-[#f8fbfb] flex items-center justify-center">
					<div className="text-center flex flex-col   mt-8">
						<div className="md:text-2xl text-sm font-semibold">
							No products found in the "
							{categories.find((category) => category.id === categoriesId)
								?.name || ""}
							" category.
						</div>
						<p className="text-xs md:text-lg">Please check back later or select another category</p>
					</div>
				</div>
			)}
			{categoriesData && categoriesData.length > 0 && (
				<div className="grid grid-cols-2 md:grid-cols-4 xl:gap-8 gap-2 mt-2 lg:mb-[6em]">
					{categoriesData.map((product) => (
						<ProductCard
							key={product.id}
							{...product}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default CategoryCard;
