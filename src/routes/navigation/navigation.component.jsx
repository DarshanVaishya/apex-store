import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { cartContext } from "../../contexts/cart.context";
import { userContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";

function Navigation() {
	const { currentUser } = useContext(userContext);
	const { isCartOpen, setIsCartOpen } = useContext(cartContext);

	const signOutHandler = async () => {
		await signOutUser();
	};

	return (
		<>
			<nav className="navigation">
				<Link to="/" className="logo-container">
					<img src={logo} className="nav-logo" alt="Apex store logo" />
				</Link>
				<div className="nav-links-container">
					<Link to="/shop" className="nav-link">
						Shop
					</Link>
					{currentUser ? (
						<Link to="/auth" className="nav-link" onClick={signOutHandler}>
							Sign out
						</Link>
					) : (
						<Link to="/auth" className="nav-link">
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
