import React from "react";
import "./divider-text.styles.scss";

function DividerText({ children, ...otherProps }) {
	return (
		<p className="divider-text" {...otherProps}>
			{children}
		</p>
	);
}

export default DividerText;
