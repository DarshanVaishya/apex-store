import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";

import styles from "./cart-icon.module.scss";

function CartIcon() {
	const { setIsCartOpen, cartCount } = useContext(cartContext);
	const handleClick = () => setIsCartOpen((val) => !val);

	return (
		<div className={styles.container} onClick={handleClick}>
			<Icon className={styles.icon} />
			<span className={styles.count}>{cartCount}</span>
		</div>
	);
}

export default CartIcon;
