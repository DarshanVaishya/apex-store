import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";

function CategoryPreview({ title, products }) {
	const navigate = useNavigate();
	const itemsToShow = products.slice(0, 4);
	const clickHandler = () => navigate(title);

	return (
		<div className="category-preview-container padding-container">
			<h2 className="category-preview-title">
				<span onClick={clickHandler}>{title.toUpperCase()}</span>
			</h2>
			<div className="category-preview-products">
				{itemsToShow.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}

export default CategoryPreview;
