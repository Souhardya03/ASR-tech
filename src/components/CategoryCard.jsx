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
					className={` h-[150px] ${
						categoriesId === id ? "bg-[#fb2c36]" : ""
					} cursor-pointer group hover:bg-[#fb2c36] duration-150 border my-4 flex flex-col justify-center gap-2 rounded-md border-gray-400`}>
					<div className="flex items-center justify-center">
						<img
							src={image}
							alt=""
						/>
					</div>
					<h2 className={`text-center ${categoriesId===id?"text-white":""} group-hover:text-white pb-2`}>{name}</h2>
				</div>
			</>
		);
	};
	return (
		<div>
			<div className="grid grid-cols-6 gap-8 mt-8">
				{categories.map((category) => (
					<CategoryCard
						key={category.id}
						{...category}
						setCategoriesId={setCategoriesId}
						categoriesId={categoriesId}
					/>
				))}
			</div>
			{categoriesData && categoriesData.length === 0 && (
				<div className="h-[30vh] bg-[#f8fbfb] flex items-center justify-center">
					<div className="text-center flex flex-col   mt-8">
						<div className="text-2xl font-semibold">
							No products found in the "
							{categories.find((category) => category.id === categoriesId)
								?.name || ""}
							" category.
						</div>
						<p>Please check back later or select another category</p>
					</div>
				</div>
			)}
			{categoriesData && categoriesData.length > 0 && (
				<div className="grid grid-cols-4 gap-8 mt-2 mb-[6em]">
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
