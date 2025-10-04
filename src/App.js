import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Wishlist from "./pages/Wishlist/Wishlist";
import ProductDetailsPage from "./pages/ProductDetails/ProductDetails";
import CartPage from "./pages/Cart/Cart";
import MyAccountPage from "./pages/Profile/Profile";
import { Routes,Route } from "react-router-dom";

function App() {
	return (
		<>
			<NavBar />
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
			</Routes>

			<Footer />
		</>
	);
}

export default App;
