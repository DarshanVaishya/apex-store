import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

function CartDropdown() {
	const { cartItems } = useContext(cartContext);

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} cartItem={cartItem} />
				))}
			</div>
			<Button>Go to checkout</Button>
		</div>
	);
}

export default CartDropdown;
