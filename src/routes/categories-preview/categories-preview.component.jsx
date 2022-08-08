import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { categoriesContext } from "../../contexts/categories.context";

function CategoriesPreview() {
	const { categoriesMap } = useContext(categoriesContext);

	return (
		<>
			{Object.keys(categoriesMap).map((title) => (
				<CategoryPreview
					key={title}
					title={title}
					products={categoriesMap[title]}
				/>
			))}
		</>
	);
}

export default CategoriesPreview;
