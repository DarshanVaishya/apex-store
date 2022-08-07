import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { cartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

function Checkout() {
	const { cartItems } = useContext(cartContext);

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

			{cartItems.map((item) => (
				<CheckoutItem key={item.id} cartItem={item} />
			))}
			<span className="checkout-total">Total: 0</span>
		</div>
	);
}

export default Checkout;
