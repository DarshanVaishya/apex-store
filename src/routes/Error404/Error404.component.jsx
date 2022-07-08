import React from "react";
import { Link } from "react-router-dom";
import "./Error404.styles.scss";

function Error404() {
	return (
		<div className="E404-wrapper">
			<h1>Error 404: Page not found</h1>
			<p>
				This page doesn't seem to exist. Please click on navigation links or
				click <Link to="/">here</Link> to go back to home page.
			</p>
		</div>
	);
}

export default Error404;
