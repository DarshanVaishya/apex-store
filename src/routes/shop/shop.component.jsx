import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import Error404 from "../Error404/Error404.component";

function Shop() {
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":category" element={<Category />} />
			<Route path="*" element={<Error404 />} />
		</Routes>
	);
}

export default Shop;
