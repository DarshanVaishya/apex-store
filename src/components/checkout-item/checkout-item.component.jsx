import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

function CheckoutItem({ cartItem }) {
	const { name, imageUrl, price, quantity } = cartItem;
	const { removeItemFromCart, addItemToCart, decreaseItemFromCart } =
		useContext(cartContext);

	const removeHandler = () => removeItemFromCart(cartItem);
	const incrementHandler = () => addItemToCart(cartItem);
	const decrementHandler = () => decreaseItemFromCart(cartItem);

	return (
		<div className="checkout-item-container">
			<div className="checkout-image-container">
				<img src={imageUrl} alt={name} />
			</div>
			<span className="checkout-name">{name}</span>
			<span className="checkout-quantity">
				<button className="checkout-arrow" onClick={decrementHandler}>
					&#10094;
				</button>
				<div className="checkout-value">{quantity}</div>
				<button className="checkout-arrow" onClick={incrementHandler}>
					&#10095;
				</button>
			</span>
			<span className="checkout-price">${price}</span>
			<div className="checkout-remove-button" onClick={removeHandler}>
				&#10005;
			</div>
		</div>
	);
}

export default CheckoutItem;
