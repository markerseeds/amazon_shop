import "./App.css";
import React from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/login" element={<Login />}></Route>
				<Route
					path="/checkout"
					element={
						<React.Fragment>
							<Header /> <Checkout />
						</React.Fragment>
					}
				></Route>
				<Route
					path="/"
					element={
						<React.Fragment>
							<Header />
							<Home />
						</React.Fragment>
					}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
