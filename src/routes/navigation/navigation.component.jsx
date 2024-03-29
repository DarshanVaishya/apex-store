import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { cartContext } from "../../contexts/cart.context";
import { userContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import styles from "./navigation.module.scss";

function Navigation() {
	const { currentUser } = useContext(userContext);
	const { isCartOpen } = useContext(cartContext);

	const signOutHandler = async () => {
		await signOutUser();
	};

	return (
		<>
			<nav className={styles.navigation}>
				<Link to="/" className={styles["logo-container"]}>
					<img src={logo} className={styles.logo} alt="Apex store logo" />
				</Link>

				<div className={styles["links-container"]}>
					<Link to="/shop" className={styles.link}>
						Shop
					</Link>

					{currentUser ? (
						<Link to="/auth" className={styles.link} onClick={signOutHandler}>
							Sign out
						</Link>
					) : (
						<Link to="/auth" className={styles.link}>
							Sign in
						</Link>
					)}
					<CartIcon />
				</div>

				{isCartOpen && <CartDropdown />}
			</nav>

			<Outlet />
		</>
	);
}

export default Navigation;
