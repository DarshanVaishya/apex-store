import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { categoriesContext } from "../../contexts/categories.context";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

function Shop() {
	const { categoriesMap } = useContext(categoriesContext);
	const categories = Object.keys(categoriesMap);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			{categories.map((category) => (
				<Route key={category} path=":category" element={<Category />} />
			))}
		</Routes>
	);
}

export default Shop;
