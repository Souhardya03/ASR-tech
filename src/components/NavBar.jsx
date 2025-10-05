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
		<nav className="bg-white p-2 sm:p-4  md:py-6 lg:p-8 px-4 sm:px-6 md:px-6 lg:px-14 shadow-md fixed z-20 w-full top-0 flex flex-wrap justify-between items-center gap-3">
			{/* Logo */}
			<div className="text-[#F54A00] text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-semibold">
				QuickShop
			</div>

			{/* Search Bar */}
			<div className="hidden sm:flex border rounded-full bg-[#f3f3f9] border-gray-400 justify-between w-full sm:w-[300px] md:w-[280px] lg:w-[508px] h-[45px] sm:h-[48px] md:h-[53px] order-3 sm:order-2">
				<div className="flex w-full px-2 sm:px-3 md:px-4 py-1 focus:outline-none">
					<img
						src={SearchIcon}
						alt="Search"
						className="inline-block mr-1 sm:mr-2 w-[28px] sm:w-[32px] md:w-[37px] h-[30px] sm:h-[35px] md:h-[40px]"
					/>
					<input
						type="text"
						className="text-[#636363] text-sm md:text-base outline-none font-medium bg-[#f3f3f9] w-full placeholder:text-[#636363]"
						placeholder="Search item"
					/>
				</div>
				<div className="text-white px-3 sm:px-4 w-1/4 rounded-full py-1 flex items-center justify-center bg-black text-sm  md:text-xs lg:text-sm cursor-pointer">
					Search
				</div>
			</div>

			{/* Route Icons */}
			<div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 order-2 sm:order-3">
				{routeIcons.map((route, index) => (
					<NavLink
						key={index}
						to={route.to}
						className="relative bg-[#f3f3f9] border rounded-full w-[45px] sm:w-[50px] md:w-[58px] lg:w-[66px] flex items-center justify-center h-[45px] sm:h-[48px] md:h-[50px] lg:h-[53px]"
						onClick={scrollToTop}
						style={({ isActive }) =>
							isActive ? { backgroundColor: "#f54b01", color: "white" } : {}
						}
					>
						<span className="scale-75 sm:scale-90 md:scale-100">
							{route.icon}
						</span>

						{/* Badge (only for Cart & Favourites) */}
						{route.badge !== undefined && route.badge > 0 && (
							<span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs sm:text-sm font-semibold px-1.5 sm:px-2 py-0.5 rounded-full">
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