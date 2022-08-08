import { useNavigate } from "react-router-dom";
import "./category-item.component.scss";

function CategoryItem({ category }) {
	const { title, imageUrl } = category;
	const navigate = useNavigate();
	const clickHandler = () => navigate(`/shop/${title}`);

	return (
		<div className="category-container" onClick={clickHandler}>
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
