import Product1 from "./assets/Product1.svg";
import Product2 from "./assets/Product2.svg";
import Product3 from "./assets/Product3.svg";
import Product4 from "./assets/Product4.svg";
import Product5 from "./assets/Product5.svg";
import Product6 from "./assets/Product6.svg";

import Category1 from "./assets/Category1.svg";
import Category2 from "./assets/Category2.svg";
import Category3 from "./assets/Category3.svg";
import Category4 from "./assets/Category4.svg";
import Category5 from "./assets/Category5.svg";
import Category6 from "./assets/Category6.svg";

export const products = [
  {
    id: 1,
    image: Product1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    rating: 5,
    reviews: 89,
    discount: 40,
    categoryId: 5, // Electronics
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
    categoryId: 1, // Electronics
  },
  {
    id: 3,
    image: Product3,
    name: "Shirt",
    price: 370,
    oldPrice: 400,
    rating: 5,
    reviews: 99,
    discount: 30,
    categoryId: 3, // Electronics
  },
  {
    id: 4,
    image: Product4,
    name: "S-Series Comfort Mouse",
    price: 375,
    oldPrice: 400,
    rating: 4.8,
    reviews: 99,
    discount: 25,
    categoryId: 1, // Home Decor
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
    categoryId: 2, // Footwear
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
    categoryId: 1, // Electronics
  },
];


export const categories = [
  { id: 1, image: Category1, name: "Electronics" },
  { id: 2, image: Category2, name: "Footwear" },
  { id: 3, image: Category3, name: "Clothing" },
  { id: 4, image: Category4, name: "Camera" },
  { id: 5, image: Category5, name: "Headphones" },
  { id: 6, image: Category6, name: "Home Decor" },
];