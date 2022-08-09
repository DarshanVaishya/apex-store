import { useNavigate } from "react-router-dom";
import "./directory-item.component.scss";

function DirectoryItem({ category }) {
	const { title, imageUrl } = category;
	const navigate = useNavigate();
	const clickHandler = () => navigate(`/shop/${title}`);

	return (
		<div className="directory-item-container" onClick={clickHandler}>
			<img
				className="directory-item-img"
				src={imageUrl}
				alt={`Category of ${title}`}
			/>
			<div className="directory-item-body">
				<h2>{title}</h2>
				<p className="cta">Shop now</p>
			</div>
		</div>
	);
}

export default DirectoryItem;
