import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";

function CategoryPreview({ title, products }) {
	const itemsToShow = products.slice(0, 4);

	return (
		<div className="category-preview-container padding-container">
			<h2 className="category-preview-title">
				<Link className="category-preview-link" to={title}>
					{title.toUpperCase()}
				</Link>
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
