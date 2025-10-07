import SearchIcon from "../assets/Search.svg";
import {
	FaArrowLeft,
	FaHome,
	FaRegHeart,
	FaShoppingCart,
} from "react-icons/fa";
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
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	useEffect(() => {
		const updateCounts = () => {
			setWishlistCount(
				JSON.parse(localStorage.getItem("wishlist"))?.length || 0
			);
			const cartQuantity =
				JSON.parse(localStorage.getItem("cart"))?.reduce(
					(total, item) => total + item.quantity,
					0
				) || 0;
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
		{
			name: "Favourites",
			icon: <FaRegHeart size={24} />,
			to: "/wishlist",
			badge: wishlistCount,
		},
		{
			name: "Cart",
			icon: <FaShoppingCart size={24} />,
			to: "/cart",
			badge: cartCount,
		},
		{ name: "Profile", icon: <LuUserRound size={24} />, to: "/profile" },
	];

	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<div className="flex items-center justify-center">
			{isSearchOpen && (
				<div className="md:hidden fixed inset-0 bg-white z-30 flex flex-col">
					<div className="flex items-center gap-3 p-4 border-b">
						<button
							onClick={() => setIsSearchOpen(false)}
							className="text-2xl text-gray-600">
							<FaArrowLeft size={16} />
						</button>
						<div className="flex-1 flex border rounded-full bg-[#f3f3f9] border-gray-400 h-[45px]">
							<div className="flex w-full items-center px-3 py-1">
								<img
									src={SearchIcon}
									alt="Search"
									className="w-[24px] h-[24px] mr-2"
								/>
								<input
									type="text"
									className="text-[#636363] text-sm outline-none font-medium bg-[#f3f3f9] w-full placeholder:text-[#636363]"
									placeholder="Search item"
									autoFocus
								/>
							</div>
						</div>
					</div>

					<div className="flex-1 overflow-y-auto p-4">
						<p className="text-gray-500 text-center mt-8">
							Start typing to search...
						</p>
					</div>
				</div>
			)}

			{/* Top NavBar */}
			<nav className="bg-white p-2 sm:p-4 max-w-[1920px] mx-auto md:py-6 lg:py-4 px-4 sm:px-6 md:px-6 xl:px-14 shadow-md fixed z-20 w-full top-0 flex flex-wrap justify-between items-center gap-3">
				{/* Logo */}
				<div className="text-[#F54A00] text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-semibold">
					QuickShop
				</div>

				<div
					className="md:hidden bg-[#f3f3f9] border border-gray-400 rounded-full w-[45px] h-[45px] flex items-center justify-center cursor-pointer"
					onClick={() => setIsSearchOpen(true)}>
					<img
						src={SearchIcon}
						alt="Search"
						className="w-[24px] h-[24px]"
					/>
				</div>

				<div className="hidden md:flex border rounded-full bg-[#f3f3f9] border-gray-400 justify-between w-full sm:w-[300px] md:w-[260px] lg:w-[350px] xl:w-[508px] h-[45px] sm:h-[48px] md:h-[53px] order-3 sm:order-2">
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
					<div className="text-white px-3 sm:px-4 w-1/4 rounded-full py-1 flex items-center justify-center bg-black text-sm md:text-xs lg:text-sm cursor-pointer">
						Search
					</div>
				</div>

				<div className="hidden md:flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 order-2 sm:order-3">
					{routeIcons.map((route, index) => (
						<NavLink
							key={index}
							to={route.to}
							className="relative bg-[#f3f3f9] border rounded-full w-[45px] sm:w-[50px] md:w-[58px] lg:w-[66px] flex items-center justify-center h-[45px] sm:h-[48px] md:h-[50px] lg:h-[53px]"
							onClick={scrollToTop}
							style={({ isActive }) =>
								isActive ? { backgroundColor: "#f54b01", color: "white" } : {}
							}>
							<span className="scale-75 sm:scale-90 md:scale-100">
								{route.icon}
							</span>

							{route.badge !== undefined && route.badge > 0 && (
								<span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs sm:text-sm font-semibold px-1.5 sm:px-2 py-0.5 rounded-full">
									{route.badge}
								</span>
							)}
						</NavLink>
					))}
				</div>
			</nav>

			<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-20 pb-safe">
				<div className="flex justify-around items-center h-16 px-2">
					{routeIcons.map((route, index) => (
						<NavLink
							key={index}
							to={route.to}
							className="relative flex flex-col items-center justify-center flex-1 h-full"
							onClick={scrollToTop}>
							{({ isActive }) => (
								<>
									<div
										className={`relative ${
											isActive ? "text-[#f54b01]" : "text-gray-600"
										}`}>
										<span className="scale-90">{route.icon}</span>

										{/* Badge (only for Cart & Favourites) */}
										{route.badge !== undefined && route.badge > 0 && (
											<span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
												{route.badge}
											</span>
										)}
									</div>
									<span
										className={`text-xs mt-1 ${
											isActive
												? "text-[#f54b01] font-semibold"
												: "text-gray-600"
										}`}>
										{route.name}
									</span>
								</>
							)}
						</NavLink>
					))}
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
