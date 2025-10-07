import { useEffect, useState } from "react";

import SmartWatch from "../../assets/Group1000005958.svg";

import Banner2 from "../../assets/Banner2.svg";
import { ProductCard } from "../../components/ProductCard";
import { products } from "../../data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CategoryCard from "../../components/CategoryCard";
import { NavLink } from "react-router-dom";

// ---------------- Countdown Component ----------------
const initialTime = {
	days: 3,
	hours: 23,
	minutes: 19,
	seconds: 56,
};

const CountdownTimer = () => {
	const [time, setTime] = useState(initialTime);

	useEffect(() => {
		const timer = setInterval(() => {
			setTime((prev) => {
				let { days, hours, minutes, seconds } = prev;

				if (seconds > 0) {
					seconds--;
				} else {
					seconds = 59;
					if (minutes > 0) {
						minutes--;
					} else {
						minutes = 59;
						if (hours > 0) {
							hours--;
						} else {
							hours = 23;
							if (days > 0) {
								days--;
							} else {
								clearInterval(timer);
								return initialTime; // reset to start again OR you can stop here
							}
						}
					}
				}

				return { days, hours, minutes, seconds };
			});
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="flex gap-1  items-center mr-6 text-[#636363]">
			<div className="flex font-medium ml-1 flex-col">
				<div className="text-sm">Days</div>
				<div className="md:text-3xl text-lg">
					{String(time.days).padStart(2, "0")}
				</div>
			</div>
			<div className="mt-4  text-[#F54A00] text-2xl font-medium">:</div>
			<div className="flex font-medium ml-8 flex-col">
				<div className="text-sm">Hours</div>
				<div className="md:text-3xl text-lg">
					{String(time.hours).padStart(2, "0")}
				</div>
			</div>
			<div className="mt-4  text-[#F54A00] text-2xl font-medium">:</div>
			<div className="flex font-medium ml-8 flex-col">
				<div className="text-sm">Minutes</div>
				<div className="md:text-3xl text-lg">
					{String(time.minutes).padStart(2, "0")}
				</div>
			</div>
			<div className="mt-4  text-[#F54A00] text-2xl font-medium">:</div>
			<div className="flex font-medium ml-8 flex-col">
				<div className="text-sm">Seconds</div>
				<div className="md:text-3xl text-lg">
					{String(time.seconds).padStart(2, "0")}
				</div>
			</div>
		</div>
	);
};

// ---------------- Home Component ----------------
const Home = () => {
	const scroll = (id, offset) => {
		const el = document.getElementById(id);
		if (el) el.scrollBy({ left: offset, behavior: "smooth" });
	};
	return (
		<div className="xl:px-6  sm:mt-24 mt-20 md:mt-36 lg:mt-28">
			{/* Banner */}
			<div
				className="relative overflow-hidden mx-2 rounded-xl flex justify-end  md:px-16 lg:px-24 xl:px-20 lg:pt-8 md:mx-8 h-[220px] sm:h-[240px] md:h-[340px] lg:h-[450px] xl:h-[500px]"
				style={{ background: "linear-gradient(#F9F9F9, #E1E1E1)" }}>
				{/* Left Content */}
				<div className="absolute z-10 p-3 left-0">
					<div className="md:max-w-5xl z-1 py-4 xl:px-20 md:px-4">
						<h2 className="md:text-4xl xl:text-6xl lg:text-5xl leading-6  font-bold text-gray-900 ">
							Discover the{" "}
							<span className="text-[#ffac32] lg::text-7xl">Best Deals</span>
							<br />
							on Trendy Products
						</h2>
						<p className="lg:my-12 md:my-8 mt-2 text-[10px] font-medium xl:w-[80%] w-[55%] md:text-[16px] lg:text-[24px] text-gray-800">
							QuickShop is your one-stop shop for top-quality items at
							unbeatable prices. Explore our latest arrivals and exclusive
							offers today!
						</p>
						<div className="mt-6 flex items-center gap-4">
							<button className="bg-[#F54A00] hover:bg-orange-600 text-white font-semibold md:text-xl text-sm px-4 py-2 md:px-8 md:py-5 rounded-full shadow-xl transition duration-300">
								Shop Now
							</button>
							<button className="border border-gray-300 bg-white md:p-3 md:px-6 p-2 px-3 rounded-full shadow-md transition duration-300 ">
								<div className="md:text-2xl -rotate-[45deg]">➝</div>
							</button>
						</div>
					</div>
				</div>

				{/* Right Content - Watch Image */}
				<div className="absolute bottom-0 -right-2 lg:-bottom-8 lg:-right-4 md:mt-0 ml-4 mt-14">
					<img
						src={SmartWatch}
						alt="Smart Watch"
						className="lg:w-[1200px] brightness-105 lg:h-[500px] object-contain"
					/>
				</div>
			</div>
			{/* End of Banner */}

			<div className="md:px-8 px-4">
				<div className="flex items-center h-6 gap-2 mt-8 ">
					<div className="border-3 rounded-lg bg-[#F54A00] h-full w-2"></div>
					<div className="text-[#F54A00] text-[16px] md:text-[20px] font-medium">
						Today's Sale
					</div>
				</div>
				<div className="lg:flex w-full flex-col lg:flex-row sm:justify-between lg:mt-6 gap-16 sm:items-center">
					<div className="flex w-full items-center gap-16">
						<div className=" text-[24px] md:text-[36px] font-medium">
							Flash Sales
						</div>
					</div>
					<div className="flex sm:flex-row flex-col sm:justify-end items-center gap-2 md:gap-4">
						<CountdownTimer />
						<div className="flex items-center md:gap-4 gap-2 mt-2 md:mt-0 justify-end w-full">
							<div
								onClick={() => scroll("flash-sale-scroll", -200)}
								className="bg-[#f2f2f9] flex items-center justify-center md:w-12 md:h-12 w-8 h-8 rounded-full ">
								<FaArrowLeft size={16} />
							</div>
							<div
								onClick={() => scroll("flash-sale-scroll", 200)}
								className="bg-[#f2f2f9] flex items-center justify-center md:w-12 md:h-12 w-8 h-8 rounded-full">
								<FaArrowRight size={16} />
							</div>
						</div>
					</div>
				</div>

				{/* Product card */}
				<div className="md:grid hidden md:grid-cols-4 grid-cols-2 gap-2 xl:gap-8 lg:gap-4 md:mt-8">
					{products.slice(0, 4).map((product) => (
						<ProductCard
							key={product.id}
							{...product}
						/>
					))}
				</div>

				<div
					id="flash-sale-scroll"
					className="md:hidden flex overflow-x-auto gap-2 scroll-smooth snap-x snap-mandatory md:pb-4 no-scrollbar">
					{products.slice(0, 4).map((product) => (
						<div
							key={product.id}
							className="snap-start flex-shrink-0 w-[48%]">
							<ProductCard {...product} />
						</div>
					))}
				</div>

				{/* Categories */}
				<div className="lg:py-8 md:pb-8">
					<div className="flex items-center h-6 gap-2 mt-14 ">
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

				{/* Banner 2 */}
				<div className="lg:my-8">
					<div className="bg-black md:p-8 p-4 xl:px-28 w-full flex justify-between h-[200px] md:h-[400px] sm:h-[300px] lg:h-[500px]">
						<div className="flex  flex-col justify-center h-full gap-2 sm:gap-8 md:gap-8">
							<p className="text-[#00FF66] text-xs md:text-lg font-medium">Categories</p>
							<h2 className="text-white font-semibold text-sm lg:text-6xl sm:text-3xl md:text-4xl">
								Enhance Your Music Experience
							</h2>
							<div className="flex gap-2 md:gap-4">
								<div className="p-2 md:h-[75px] h-[30px] w-[30px] flex flex-col items-center justify-center font-medium rounded-full md:w-[75px] bg-white">
									<p className="md:text-xl text-[8px]">23</p>
									<p className="md:text-sm text-[6px]">Hours</p>
								</div>
								<div className="p-2 md:h-[75px] h-[30px] w-[30px] flex flex-col items-center justify-center font-medium rounded-full md:w-[75px] bg-white">
									<p className="md:text-xl text-[8px]">5</p>
									<p className="md:text-sm text-[6px]">Days</p>
								</div>
								<div className="p-2 md:h-[75px] h-[30px] w-[30px] flex flex-col items-center justify-center font-medium rounded-full md:w-[75px] bg-white">
									<p className="md:text-xl text-[8px]">59</p>
									<p className="md:text-sm text-[6px]">Minutes</p>
								</div>
								<div className=" p-2 md:h-[75px] h-[30px] w-[30px] flex flex-col items-center justify-center font-medium rounded-full md:w-[75px] bg-white">
									<p className="md:text-xl text-[8px]">35</p>
									<p className="md:text-sm text-[6px]">Seconds</p>
								</div>
							</div>
							<div>
								<button className="bg-green-400 text-white md:w-[171px] md:h-[56px] h-[30px] w-[80px] text-xs md:text-xl rounded-[4px]">
									Buy Now
								</button>
							</div>
						</div>
						<div className=" flex items-center justify-center ">
							<img
								src={Banner2}
								alt=""
								
							/>
						</div>
					</div>
				</div>

				{/* Our Products */}
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
							<div onClick={() => scroll("products-scroll", -200)} className="bg-[#f2f2f9] flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full">
								<FaArrowLeft size={16} />
							</div>
							<div onClick={() => scroll("products-scroll", 200)} className="bg-[#f2f2f9] flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full">
								<FaArrowRight size={16} />
							</div>
						</div>
					</div>
					{/* Shopping Cards */}
					<div className="md:grid hidden md:grid-cols-4 lg:gap-4 grid-cols-2 gap-2 xl:gap-8 md:mt-8">
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
					<div className="mt-14 mb-16 flex items-center justify-center text-center font-medium cursor-pointer">
						<NavLink
							to={"/products"}
							onClick={() => window.scrollTo(0, 0)}
							className="text-white p-4 lg:w-[20%] rounded-md text-sm md:text-lg bg-[#F54A00]">
							View All Products
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
