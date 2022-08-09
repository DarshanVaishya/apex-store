import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import styles from "./cart-dropdown.module.scss";

function CartDropdown() {
	const { cartItems, setIsCartOpen } = useContext(cartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate("/checkout");
		setIsCartOpen(false);
	};

	return (
		<div className={styles.container}>
			<div className={styles.items}>
				{cartItems.length > 0 ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} cartItem={cartItem} />
					))
				) : (
					<span className={styles["empty-message"]}>Cart is empty</span>
				)}
			</div>
			<Button onClick={goToCheckoutHandler}>Go to checkout</Button>
		</div>
	);
}

export default CartDropdown;
