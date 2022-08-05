import "./cart-icon.styles.scss";
import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";

function CartIcon() {
	const { setIsCartOpen, cartItems } = useContext(cartContext);
	const handleClick = () => setIsCartOpen((val) => !val);
	const total =
		cartItems.length > 0
			? cartItems.reduce((sum, item) => sum + item.quantity, 0)
			: 0;

	return (
		<div className="cart-icon-container" onClick={handleClick}>
			<Icon className="shopping-icon" />
			<span className="shopping-count">{total}</span>
		</div>
	);
}

export default CartIcon;
