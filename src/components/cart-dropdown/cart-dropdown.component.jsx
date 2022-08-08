import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

function CartDropdown() {
	const { cartItems } = useContext(cartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate("/checkout");
	};

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.length > 0 ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} cartItem={cartItem} />
					))
				) : (
					<span className="cart-dropdown-empty-message">Cart is empty</span>
				)}
			</div>
			<Button onClick={goToCheckoutHandler}>Go to checkout</Button>
		</div>
	);
}

export default CartDropdown;
