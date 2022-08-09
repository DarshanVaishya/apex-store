import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/button.component";
import ProductCard from "../../components/product-card/product-card.component";
import { categoriesContext } from "../../contexts/categories.context";
import Error404 from "../Error404/Error404.component";

import styles from "./category.module.scss";

function Category() {
	const { category } = useParams();
	const { categoriesMap } = useContext(categoriesContext);
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();
	const correctCategory = useRef(true);
	const clickHandler = () => navigate("/shop");

	useEffect(() => {
		setProducts(categoriesMap[category] || []);
		const categories = Object.keys(categoriesMap);
		if (categories.length === 0) return;
		correctCategory.current = categories.some((cat) => cat === category);
	}, [category, categoriesMap]);

	if (!correctCategory.current) return <Error404 />;
	if (products.length === 0) return <h1>Loading...</h1>;
	return (
		<div className="padding-container">
			<h2 className={styles.header}>
				<span>{category.toUpperCase()}</span>
				<Button onClick={clickHandler}>Back to shop</Button>
			</h2>
			<div className={styles.container}>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}

export default Category;
