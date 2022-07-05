import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

function Directory({ categories }) {
	return (
		<div className="directory-container">
			{categories.map((item) => (
				<CategoryItem id={item.id} category={item} />
			))}
		</div>
	);
}

export default Directory;
