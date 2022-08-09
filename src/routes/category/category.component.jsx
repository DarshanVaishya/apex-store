import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/button.component";
import ProductCard from "../../components/product-card/product-card.component";
import { categoriesContext } from "../../contexts/categories.context";
import "./category.styles.scss";

function Category() {
	const { category } = useParams();
	const { categoriesMap } = useContext(categoriesContext);
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();
	const clickHandler = () => navigate("/shop");

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<div className="padding-container">
			<h2 className="category-route-header">
				<span>{category.toUpperCase()}</span>
				<Button onClick={clickHandler}>Back to shop</Button>
			</h2>
			<div className="category-route-container">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}

export default Category;
