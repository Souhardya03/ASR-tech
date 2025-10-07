import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Wishlist from "./pages/Wishlist/Wishlist";
import ProductDetailsPage from "./pages/ProductDetails/ProductDetails";
import CartPage from "./pages/Cart/Cart";
import MyAccountPage from "./pages/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import CheckoutPage from "./pages/Checkout/Checkout";

function App() {
	return (
		<div>
			<NavBar />
			<div className=" max-w-[1920px] mx-auto ">
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/wishlist"
						element={<Wishlist />}
					/>
					<Route
						path="/product/:id"
						element={<ProductDetailsPage />}
					/>
					<Route
						path="/cart"
						element={<CartPage />}
					/>
					<Route
						path="/profile"
						element={<MyAccountPage />}
					/>
					<Route
						path="/products"
						element={<Products />}
					/>
					<Route
						path="/checkout"
						element={<CheckoutPage />}
					/>
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
