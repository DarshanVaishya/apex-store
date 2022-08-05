import React from "react";
import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";

function ProductCard({ product }) {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(cartContext);
	const addProductToCart = () => addItemToCart(product);

	return (
		<div className="product-card-container">
			<img src={imageUrl} alt={name} />
			<div className="product-footer">
				<span className="product-name">{name}</span>
				<span className="product-price">${price}</span>
			</div>
			<Button buttonType="inverted" onClick={addProductToCart}>
				Add to cart
			</Button>
		</div>
	);
}

export default ProductCard;
