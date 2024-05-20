import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Header />

			<Routes>
				<Route path="/checkout" element={<Checkout />}></Route>
				<Route path="/" element={<Home />}></Route>
			</Routes>
		</div>
	);
}

export default App;
