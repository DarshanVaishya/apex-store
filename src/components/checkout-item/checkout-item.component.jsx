import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";
import styles from "./checkout-item.module.scss";

function CheckoutItem({ cartItem }) {
	const { name, imageUrl, price, quantity } = cartItem;
	const { removeItemFromCart, addItemToCart, decreaseItemFromCart } =
		useContext(cartContext);

	const removeHandler = () => removeItemFromCart(cartItem);
	const incrementHandler = () => addItemToCart(cartItem);
	const decrementHandler = () => decreaseItemFromCart(cartItem);

	return (
		<div className={styles.container}>
			<div className={styles["img-container"]}>
				<img src={imageUrl} alt={name} />
			</div>
			<span className={styles.name}>{name}</span>
			<span className={styles.quantity}>
				<button className={styles.arrow} onClick={decrementHandler}>
					&#10094;
				</button>
				<div className={styles.value}>{quantity}</div>
				<button className={styles.arrow} onClick={incrementHandler}>
					&#10095;
				</button>
			</span>
			<span className={styles.price}>${price}</span>
			<div className={styles["remove-button"]} onClick={removeHandler}>
				&#10005;
			</div>
		</div>
	);
}

export default CheckoutItem;
