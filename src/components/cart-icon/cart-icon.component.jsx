import "./cart-icon.styles.scss";
import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";

function CartIcon() {
	return (
		<div className="cart-icon-container">
			<Icon className="shopping-icon" />
			<span className="shopping-count">10</span>
		</div>
	);
}

export default CartIcon;
