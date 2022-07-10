import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import Error404 from "./routes/Error404/Error404.component";
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
				<Route path="auth" element={<Authentication />} />
				<Route path="*" element={<Error404 />} />
			</Route>
		</Routes>
	);
}

export default App;
