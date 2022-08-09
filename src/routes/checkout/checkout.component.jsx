import { useContext } from "react";
import { Link } from "react-router-dom";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { cartContext } from "../../contexts/cart.context";
import styles from "./checkout.module.scss";

function Checkout() {
	const { cartItems, cartTotal } = useContext(cartContext);

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles["header-block"]}>
					<span>Product</span>
				</div>
				<div className={styles["header-block"]}>
					<span>Description</span>
				</div>
				<div className={styles["header-block"]}>
					<span>Quantity</span>
				</div>
				<div className={styles["header-block"]}>
					<span>Price</span>
				</div>
				<div className={styles["header-block"]}>
					<span>Remove</span>
				</div>
			</div>

			{cartItems.length !== 0 ? (
				cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item} />)
			) : (
				<h2 className={styles["empty-message"]}>
					Your cart is empty! Visit the <Link to="/shop">Shop</Link> to add new
					items.
				</h2>
			)}
			<span className={styles.total}>Total: ${cartTotal}</span>
		</div>
	);
}

export default Checkout;
