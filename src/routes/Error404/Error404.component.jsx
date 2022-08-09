import React from "react";
import { Link } from "react-router-dom";
import styles from "./Error404.module.scss";

function Error404() {
	return (
		<div className={styles.container}>
			<h1 className={styles.header}>Error 404: Page not found</h1>
			<p className={styles.text}>
				This page doesn't seem to exist. Please click on navigation links or
				click <Link to="/">here</Link> to go back to the home page.
			</p>
		</div>
	);
}

export default Error404;
