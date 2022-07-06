import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

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
				<Route path="sign-in" element={<SignIn />} />
			</Route>

			<Route path="*" element={<h1>Error 404: Page not found!</h1>} />
		</Routes>
	);
}

export default App;
