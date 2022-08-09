import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { categoriesContext } from "../../contexts/categories.context";
import Loader from "../../components/loader/loader.component";

function CategoriesPreview() {
	const { categoriesMap } = useContext(categoriesContext);
	const categories = Object.keys(categoriesMap);

	if (categories.length === 0) return <Loader />;
	return (
		<>
			<Loader />
			{categories.map((title) => (
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
