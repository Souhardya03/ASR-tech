import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<NavBar />
      <Home/>
      <Footer/>
		</>
	);
}

export default App;
