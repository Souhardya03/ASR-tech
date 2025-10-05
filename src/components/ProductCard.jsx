import FillEye from "../assets/FillEye.png";
import {
	FaStar,
	FaStarHalfAlt,
	FaRegStar,
	FaRegHeart,
	FaHeart,
	FaRegEye,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export const ProductCard = ({
	id,
	image,
	name,
	price,
	oldPrice,
	rating,
	reviews,
	discount,
	onWishlistChange,
	onCartChange
}) => {
	const [inWishlist, setInWishlist] = useState(false);
	const [inCart, setInCart] = useState(false);

	useEffect(() => {
		const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
		setInWishlist(wishlist.includes(id));
		const cart = JSON.parse(localStorage.getItem("cart")) || [];
		setInCart(cart.includes(id));
	}, [id]);

	const toggleWishlist = () => {
		let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
		if (wishlist.includes(id)) {
			wishlist = wishlist.filter((item) => item !== id);
			setInWishlist(false);
		} else {
			wishlist.push(id);
			setInWishlist(true);
		}
		localStorage.setItem("wishlist", JSON.stringify(wishlist));
		if (onWishlistChange) onWishlistChange();
		window.dispatchEvent(new Event("wishlistUpdated"));
	};
	const toggleCart = () => {
		let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
		const existingItem = cartItems.find(item => item.id === id);
		if (existingItem) {
			cartItems = cartItems.filter(item => item.id !== id);
			setInCart(false);
		} else {
			cartItems.push({ id, quantity: 1 });
			setInCart(true);
		}
		localStorage.setItem("cart", JSON.stringify(cartItems));
		if (onCartChange) onCartChange();
		window.dispatchEvent(new Event("cartUpdated"));
	};

	return (
		<div className=" lg:py-8 pt-8">
			<div className=" rounded-lg md:h-[350px]">
				<div className="relative group overflow-hidden bg-[#f5f5f5] flex items-center justify-center h-[220px] md:h-[200px]  lg:h-[300px]">
					<div className="absolute right-1 md:right-2 top-2 ">
						<div className="flex flex-col gap-2">
							<div
								className="bg-[#ffffff] md:h-10 md:w-10 h-8 w-8 rounded-full flex items-center justify-center cursor-pointer"
								onClick={toggleWishlist}>
								{inWishlist ? (
									<FaHeart
										size={18}
										color="red"
									/>
								) : (
									<FaRegHeart size={18} />
								)}
							</div>
							<NavLink
								to={`/product/${id}`}
								className="bg-[#ffffff] md:h-10 md:w-10 h-8 w-8 rounded-full flex items-center justify-center cursor-pointer"
								onClick={() => window.scrollTo(0, 0)}>
								<FaRegEye size={18} />
							</NavLink>
						</div>
					</div>
					<div className="absolute bg-[#F54A00] text-white p-2 md:text-sm text-xs rounded top-3 left-4">
						-{discount}%
					</div>
					{inCart ? (
						<>
							<NavLink
								to="/cart"
								className="absolute overflow-hidden  group-hover:translate-y-0 translate-y-14 cursor-pointer bottom-1 bg-green-500 w-full text-white text-center p-3 duration-150"
								onClick={() => window.scrollTo(0, 0)}>
								Go to cart
							</NavLink>
						</>
					) : (
						<div
							className="absolute overflow-hidden  group-hover:translate-y-0 translate-y-14 cursor-pointer bottom-1 bg-black w-full text-white text-center p-3 duration-150"
							onClick={toggleCart}>
							Add to cart
						</div>
					)}

					<img
						src={image}
						className="md:w-full lg:h-64 w-32 h-32 "
						alt=""
					/>
				</div>
				<div className="mt-4">
					<NavLink
						to={`/product/${id}`}
						className="font-semibold md:text-xl cursor-pointer"
						onClick={() => window.scrollTo(0, 0)}>
						{name}
					</NavLink>
					<p className="text-[#DB4444] text-sm md:text-lg font-medium">
						${price}{" "}
						<span className=" line-through ml-4 text-[#9f9e9e]">
							${oldPrice}
						</span>
					</p>
					<div className="flex items-center mt-1">
						<Rating rating={rating} />
						<span className="ml-2 text-sm text-gray-500">({reviews})</span>
					</div>
				</div>
			</div>
		</div>
	);
};

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
