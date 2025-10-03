import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import SmartWatch from "../../assets/Group1000005958.svg";
import Product1 from "../../assets/Product1.svg";
import Product2 from "../../assets/Product2.svg";
import Product3 from "../../assets/Product3.svg";
import Product4 from "../../assets/Product4.svg";
import Product5 from "../../assets/Product5.svg";
import Product6 from "../../assets/Product6.svg";
import FillHeart from "../../assets/FillHeart.svg";
import FillEye from "../../assets/FillEye.png";
import Category1 from "../../assets/Category1.svg";
import Category2 from "../../assets/Category2.svg";
import Category3 from "../../assets/Category3.svg";
import Category4 from "../../assets/Category4.svg";
import Category5 from "../../assets/Category5.svg";
import Category6 from "../../assets/Category6.svg";
import Banner2 from "../../assets/Banner2.svg";

const products = [
  {
    id: 1,
    image: Product1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    rating: 5,
    reviews: 89,
    discount: 40,
  },
  {
    id: 2,
    image: Product2,
    name: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    rating: 4,
    reviews: 75,
    discount: 35,
  },
  {
    id: 3,
    image: Product3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    rating: 5,
    reviews: 99,
    discount: 30,
  },
  {
    id: 4,
    image: Product4,
    name: "S-Series Comfort Chair ",
    price: 375,
    oldPrice: 400,
    rating: 4.8,
    reviews: 99,
    discount: 25,
  },
  {
    id: 5,
    image: Product5,
    name: "Shoes",
    price: 420,
    oldPrice: 500,
    rating: 4.5,
    reviews: 150,
    discount: 20,
  },
  {
    id: 6,
    image: Product6,
    name: "GP11 Shooter USB Gamepad",
    price: 80,
    oldPrice: 100,
    rating: 4.2,
    reviews: 200,
    discount: 15,
  },
];

const categories = [
  { id: 1, image: Category1, name: "Electronics" },
  { id: 2, image: Category2, name: "Footwear" },
  { id: 3, image: Category3, name: "Clothing" },
  { id: 4, image: Category4, name: "Camera" },
  { id: 5, image: Category5, name: "Headphones" },
  { id: 6, image: Category6, name: "Home Decor" },
];

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
          <div className="max-w-4xl z-1 p-28">
            <h2 className=" md:text-[68px] font-bold text-gray-900 leading-snug">
              Discover the{" "}
              <span className="text-[#ffac32] text-5xl">Best Deals</span>
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

      {/* Flash Sale */}
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
        <div className="mt-8 mb-16 flex items-center justify-center text-center font-medium cursor-pointer">
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
          <div className="mt-8 mb-16 flex items-center justify-center text-center font-medium cursor-pointer">
            <div className="text-white p-4 w-[20%] rounded-md text-lg bg-[#F54A00]">
              View All Products
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------------- Product Card ----------------
const ProductCard = ({
  image,
  name,
  price,
  oldPrice,
  rating,
  reviews,
  discount,
}) => {
  return (
    <div className=" py-8">
      <div className=" rounded-lg w-[ h-[350px]">
        <div className="relative group overflow-hidden bg-[#f5f5f5] flex items-center justify-center w-[270px h-[300px]">
          <div className="absolute right-2 top-2 ">
            <div className="flex flex-col gap-2">
              <img
                src={FillHeart}
                alt="Favorite"
                className="inline-block  w-[35px] h-[35px] cursor-pointer"
              />
              <img
                src={FillEye}
                alt="Eye"
                className="inline-block  w-[35px] h-[35px] cursor-pointer"
              />
            </div>
          </div>
          <div className="absolute bg-[#F54A00] text-white p-2 text-sm rounded top-3 left-4">
            -{discount}%
          </div>
          <div className="absolute overflow-hidden  group-hover:translate-y-0 translate-y-14 cursor-pointer bottom-1 bg-black w-full text-white text-center p-3 duration-150">
            Add to cart
          </div>
          <img src={image} className="" alt="" />
        </div>
        <div>
          <h2 className="font-semibold text-xl cursor-pointer">{name}</h2>
          <p className="text-[#DB4444] text-lg font-medium">
            ${price}{" "}
            <span className=" line-through ml-4 text-[#9f9e9e]">${oldPrice}</span>
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

// ---------------- Rating Stars ----------------
const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
  }
  return <div className="flex">{stars}</div>;
};

export default Home;
