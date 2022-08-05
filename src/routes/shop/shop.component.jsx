import React from "react";
import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { productsContext } from "../../contexts/products.context";
import "./shop.styles.scss";

function Shop() {
	const { products } = useContext(productsContext);

	return (
		<div className="products-container">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
}

export default Shop;
