import React from "react";
import SearchIcon from "../assets/Search.svg";
import HomeIcon from "../assets/HomePage.svg";
import FavIcon from "../assets/Favorite.svg";
import CartIcon from "../assets/ShoppingCart.svg";
import CustomerIcon from "../assets/Customer.svg";

const routeIcons = [
	{ name: "Home", icon: HomeIcon },
	{ name: "Favourites", icon: FavIcon },
	{ name: "Cart", icon: CartIcon },
	{ name: "Profile", icon: CustomerIcon },
];

const NavBar = () => {
	return (
		<nav className="bg-white p-8 px-14 fixed z-20 w-full top-0 flex justify-between items-center ">
			<div className="text-[#F54A00] text-[36px] font-semibold">QuickShop</div>

			<div className="flex border rounded-full bg-[#f3f3f9] border-gray-400 justify-between  w-[508px] h-[53px]">
				<div className=" flex w-full    px-4 py-1 focus:outline-none">
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
			<div className="flex gap-6">
				{routeIcons.map((route) => (
					<div className="bg-[#f3f3f9] border rounded-full w-[66px] flex items-center justify-center h-[53px] ">
						<img
							key={route.name}
							src={route.icon}
							alt={route.name}
							className="inline-block  mx-4 p-2 w-[40px] h-[40px] cursor-pointer"
						/>
					</div>
				))}
			</div>
		</nav>
	);
};

export default NavBar;
