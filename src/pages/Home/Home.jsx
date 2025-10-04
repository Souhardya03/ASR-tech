import React, { useEffect, useState } from "react";

import SmartWatch from "../../assets/Group1000005958.svg";

import Banner2 from "../../assets/Banner2.svg";
import { ProductCard } from "../../components/ProductCard";
import { products,categories } from "../../data";


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
    <div className="flex items-center text-[#636363]">
      <div className="flex font-medium ml-8 flex-col">
        <div className="text-sm">Days</div>
        <div className="text-3xl">{String(time.days).padStart(2, "0")}</div>
      </div>
      <div className="mt-4 ml-4 text-[#F54A00] text-2xl font-medium">:</div>
      <div className="flex font-medium ml-8 flex-col">
        <div className="text-sm">Hours</div>
        <div className="text-3xl">{String(time.hours).padStart(2, "0")}</div>
      </div>
      <div className="mt-4 ml-4 text-[#F54A00] text-2xl font-medium">:</div>
      <div className="flex font-medium ml-8 flex-col">
        <div className="text-sm">Minutes</div>
        <div className="text-3xl">{String(time.minutes).padStart(2, "0")}</div>
      </div>
      <div className="mt-4 ml-4 text-[#F54A00] text-2xl font-medium">:</div>
      <div className="flex font-medium ml-8 flex-col">
        <div className="text-sm">Seconds</div>
        <div className="text-3xl">{String(time.seconds).padStart(2, "0")}</div>
      </div>
    </div>
  );
};

// ---------------- Home Component ----------------
const Home = () => {
  return (
    <div className="px-14 mt-28">
      {/* Banner */}
      <div
        className="relative rounded-xl flex justify-end px-8 md:px-16 lg:px-24 md:mx-8 py-16"
        style={{ background: "linear-gradient(#F9F9F9, #E1E1E1)" }}
      >
        {/* Left Content */}
        <div className="absolute z-10 left-0">
          <div className="max-w-5xl z-1 p-28">
            <h2 className=" md:text-7xl leading-3 font-bold text-gray-900 ">
              Discover the{" "}
              <span className="text-[#ffac32] text-7xl">Best Deals</span>
              <br />
              on Trendy Products
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              QuickShop is your one-stop shop for top-quality items at
              unbeatable prices. Explore our latest arrivals and exclusive
              offers today!
            </p>
            <div className="mt-6 flex items-center gap-4">
              <button className="bg-[#F54A00] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-xl transition duration-300">
                Shop Now
              </button>
              <button className="border border-gray-300 bg-white p-3 px-6 rounded-full shadow-md transition duration-300 ">
                <div className="text-2xl -rotate-[45deg]">➝</div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Content - Watch Image */}
        <div className="hidden md:block">
          <img
            src={SmartWatch}
            alt="Smart Watch"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      {/* End of Banner */}

      
      <div className="px-8">
        <div className="flex items-center h-6 gap-2 mt-8 ">
          <div className="border-3 rounded-lg bg-[#F54A00] h-full w-2"></div>
          <div className="text-[#F54A00] text-[20px] font-medium">
            Today's Sale
          </div>
        </div>
        <div className="flex w-full justify-between mt-6 gap-16 items-center">
          <div className="flex w-full items-center gap-16">
            <div className=" text-[36px] font-medium">Flash Sales</div>
            <CountdownTimer />
          </div>
          <div className="flex text-xl justify-end items-center gap-4">
            <div className="bg-[#f2f2f9] flex items-center justify-center w-12 h-12 rounded-full rotate-180">
              ➝
            </div>
            <div className="bg-[#f2f2f9] flex items-center justify-center w-12 h-12 rounded-full">
              ➝
            </div>
          </div>
        </div>

        {/* Product card */}
        <div className="grid grid-cols-4 gap-8 mt-8">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="mt-14 mb-16 flex items-center justify-center text-center font-medium cursor-pointer">
          <div className="text-white p-4 w-[20%] rounded-md text-lg bg-[#F54A00]">
            View All Products
          </div>
        </div>

        {/* Categories */}
        <div className="">
          <div className="flex items-center h-6 gap-2 mt-14 ">
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
              <div className="bg-[#f2f2f9] flex items-center justify-center w-12 h-12 rounded-full rotate-180">
                ➝
              </div>
              <div className="bg-[#f2f2f9] flex items-center justify-center w-12 h-12 rounded-full">
                ➝
              </div>
            </div>
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-6 gap-8 mt-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>
        </div>

        {/* Banner 2 */}
        <div className="my-8">
          <div className="bg-black p-8 px-28 w-full flex justify-between h-[500px]">
            <div className="flex  flex-col justify-center h-full gap-8">
              <p className="text-[#00FF66] font-medium">Categories</p>
              <h2 className="text-white font-semibold text-6xl">
                Enhance Your Music Experience
              </h2>
              <div className="flex gap-4">
                <div className="p-2 h-[75px] flex flex-col items-center justify-center font-medium rounded-full w-[75px] bg-white">
                  <p className="text-xl">23</p>
                  <p className="text-sm">Hours</p>
                </div>
                <div className="p-2 h-[75px] flex flex-col items-center justify-center font-medium rounded-full w-[75px] bg-white">
                  <p className="text-xl">5</p>
                  <p className="text-sm">Days</p>
                </div>
                <div className="p-2 h-[75px] flex flex-col items-center justify-center font-medium rounded-full w-[75px] bg-white">
                  <p className="text-xl">59</p>
                  <p className="text-sm">Minutes</p>
                </div>
                <div className=" p-2 h-[75px] flex flex-col items-center justify-center font-medium rounded-full w-[75px] bg-white">
                  <p className="text-xl">35</p>
                  <p className="text-sm">Seconds</p>
                </div>
              </div>
              <div>
                <button className="bg-green-400 text-white w-[171px] h-[56px] rounded-[4px]">
                  Buy Now
                </button>
              </div>
            </div>
            <div className=" ">
              <img src={Banner2} alt="" />
            </div>
          </div>
        </div>

        {/* Our Products */}
        <div className="py-8">
          <div className="flex items-center h-6 gap-2 mt-8 ">
            <div className="border-3 rounded-lg bg-[#F54A00] h-full w-2"></div>
            <div className="text-[#F54A00] text-[20px] font-medium">
              Our Products
            </div>
          </div>
          <div className="flex w-full justify-between mt-6 gap-16 items-center">
            <div className="flex w-full items-center gap-16">
              <div className=" text-[36px] font-medium">
                Explore our Products
              </div>
            </div>
            <div className="flex text-xl justify-end items-center gap-4">
              <div className="bg-[#f2f2f9] flex items-center justify-center w-12 h-12 rounded-full rotate-180">
                ➝
              </div>
              <div className="bg-[#f2f2f9] flex items-center justify-center w-12 h-12 rounded-full">
                ➝
              </div>
            </div>
          </div>
          {/* Shopping Cards */}
          <div className="grid grid-cols-4 gap-8 mt-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="mt-14 mb-16 flex items-center justify-center text-center font-medium cursor-pointer">
            <div className="text-white p-4 w-[20%] rounded-md text-lg bg-[#F54A00]">
              View All Products
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------------- Category Card ----------------
const CategoryCard = ({ image, name }) => {
  return (
    <div className=" h-[150px] group hover:bg-red-400 duration-150 border my-4 flex flex-col justify-center gap-2 rounded-md border-gray-400">
      <div className="flex items-center  justify-center ">
        <img src={image} alt="" />
      </div>
      <h2 className="text-center group-hover:text-white pb-2">{name}</h2>
    </div>
  );
};

export default Home;
