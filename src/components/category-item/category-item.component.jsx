import "./category-item.component.scss";

function CategoryItem({ category }) {
	const { title, imageUrl } = category;

	return (
		<div className="category-container">
			<img
				className="category-container-img"
				src={imageUrl}
				alt={`Category of ${title}`}
			/>
			<div className="category-body-container">
				<h2>{title}</h2>
				<p className="cta">Shop now</p>
			</div>
		</div>
	);
}

export default CategoryItem;
