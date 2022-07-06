import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

function Shop() {
	return (
		<div>
			<h1>SHOP PAGE</h1>
		</div>
	);
}

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Shop />} />
			</Route>

			<Route path="*" element={<h1>Error 404: Page not found!</h1>} />
		</Routes>
	);
}

export default App;
