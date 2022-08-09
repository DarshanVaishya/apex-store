import React from "react";
import styles from "./divider-text.module.scss";

function DividerText({ children, ...otherProps }) {
	return (
		<p className={styles.text} {...otherProps}>
			{children}
		</p>
	);
}

export default DividerText;
