import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./navigation.styles.scss";

function Navigation() {
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
				</div>
			</nav>

			<Outlet />
		</>
	);
}

export default Navigation;
