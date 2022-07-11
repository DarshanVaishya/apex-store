import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { userContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";

function Navigation() {
	const { currentUser, setCurrentUser } = useContext(userContext);

	const signOutHandler = async () => {
		await signOutUser();
		setCurrentUser(null);
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
				</div>
			</nav>

			<Outlet />
		</>
	);
}

export default Navigation;
