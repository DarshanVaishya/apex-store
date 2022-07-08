import React from "react";
import "./form-input.styles.scss";

function FormInput({ label, id, ...otherProps }) {
	const shrink = otherProps.value.length ? "shrink" : "";

	return (
		<div className="forminput-group">
			<input className="form-input" id={id} {...otherProps} required />
			{label && (
				<label className={`${shrink} form-input-label`} htmlFor={id}>
					{label}
				</label>
			)}
		</div>
	);
}

export default FormInput;
