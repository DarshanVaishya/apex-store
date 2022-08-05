import "./cart-icon.styles.scss";
import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";

function CartIcon() {
	const { setIsCartOpen } = useContext(cartContext);
	const handleClick = () => setIsCartOpen((val) => !val);

	return (
		<div className="cart-icon-container" onClick={handleClick}>
			<Icon className="shopping-icon" />
			<span className="shopping-count">0</span>
		</div>
	);
}

export default CartIcon;
