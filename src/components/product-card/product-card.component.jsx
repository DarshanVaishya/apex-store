import Button from "../button/button.component";
import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";

import styles from "./product-card.module.scss";

function ProductCard({ product }) {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(cartContext);
	const addProductToCart = () => addItemToCart(product);

	return (
		<div className={styles.container}>
			<img src={imageUrl} alt={name} />
			<div className={styles.footer}>
				<span className={styles.name}>{name}</span>
				<span className={styles.price}>${price}</span>
			</div>
			<Button buttonType="inverted" onClick={addProductToCart}>
				Add to cart
			</Button>
		</div>
	);
}

export default ProductCard;
