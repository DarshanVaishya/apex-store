import { useContext } from "react";
import { Link } from "react-router-dom";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { cartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

function Checkout() {
	const { cartItems, cartTotal } = useContext(cartContext);

	return (
		<div className="checkout-container">
			<div className="checkout-header">
				<div className="checkout-header-block">
					<span>Product</span>
				</div>
				<div className="checkout-header-block">
					<span>Description</span>
				</div>
				<div className="checkout-header-block">
					<span>Quantity</span>
				</div>
				<div className="checkout-header-block">
					<span>Price</span>
				</div>
				<div className="checkout-header-block">
					<span>Remove</span>
				</div>
			</div>

			{cartItems.length !== 0 ? (
				cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item} />)
			) : (
				<h2 className="checkout-empty-message">
					Your cart is empty! Visit the <Link to="/shop">Shop</Link> to add new
					items.
				</h2>
			)}
			<span className="checkout-total">Total: ${cartTotal}</span>
		</div>
	);
}

export default Checkout;
