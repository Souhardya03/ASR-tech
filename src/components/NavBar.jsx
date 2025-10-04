import SearchIcon from "../assets/Search.svg";
import { FaHome, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBar = () => {
	const [wishlistCount, setWishlistCount] = useState(
		JSON.parse(localStorage.getItem("wishlist"))?.length || 0
	);
	const [cartCount, setCartCount] = useState(
		JSON.parse(localStorage.getItem("cart"))?.length || 0
	);
	
	useEffect(() => {
		const updateCounts = () => {
			setWishlistCount(JSON.parse(localStorage.getItem("wishlist"))?.length || 0);
			const cartQuantity = JSON.parse(localStorage.getItem("cart"))?.reduce((total, item) => total + item.quantity, 0) || 0;
			setCartCount(cartQuantity || 0);
		};

		window.addEventListener("storage", updateCounts);
		window.addEventListener("wishlistUpdated", updateCounts);
		window.addEventListener("cartUpdated", updateCounts);

		return () => {
			window.removeEventListener("storage", updateCounts);
			window.removeEventListener("wishlistUpdated", updateCounts);
			window.removeEventListener("cartUpdated", updateCounts);
		};
	}, []);

	const routeIcons = [
		{ name: "Home", icon: <FaHome size={24} />, to: "/" },
		{ name: "Favourites", icon: <FaRegHeart size={24} />, to: "/wishlist", badge: wishlistCount },
		{ name: "Cart", icon: <FaShoppingCart size={24} />, to: "/cart", badge: cartCount },
		{ name: "Profile", icon: <LuUserRound size={24} />, to: "/profile" },
	];

	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<nav className="bg-white p-8 px-14 shadow-md fixed z-20 w-full top-0 flex justify-between items-center">
			{/* Logo */}
			<div className="text-[#F54A00] text-[36px] font-semibold">QuickShop</div>

			{/* Search Bar */}
			<div className="flex border rounded-full bg-[#f3f3f9] border-gray-400 justify-between w-[508px] h-[53px]">
				<div className="flex w-full px-4 py-1 focus:outline-none">
					<img
						src={SearchIcon}
						alt="Search"
						className="inline-block mr-2 w-[37px] h-[40px]"
					/>
					<input
						type="text"
						className="text-[#636363] outline-none font-medium bg-[#f3f3f9] w-full placeholder:text-[#636363]"
						placeholder="Search item"
					/>
				</div>
				<div className="text-white px-4 w-1/4 rounded-full py-1 flex items-center justify-center bg-black">
					Search
				</div>
			</div>

			{/* Route Icons */}
			<div className="flex gap-6">
				{routeIcons.map((route, index) => (
					<NavLink
						key={index}
						to={route.to}
						className="relative bg-[#f3f3f9] border rounded-full w-[66px] flex items-center justify-center h-[53px]"
						onClick={scrollToTop}
						style={({ isActive }) =>
							isActive ? { backgroundColor: "#f54b01", color: "white" } : {}
						}
					>
						{route.icon}

						{/* Badge (only for Cart & Favourites) */}
						{route.badge !== undefined && route.badge > 0 && (
							<span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm font-semibold px-2 py-0.5 rounded-full">
								{route.badge}
							</span>
						)}
					</NavLink>
				))}
			</div>
		</nav>
	);
};

export default NavBar;
