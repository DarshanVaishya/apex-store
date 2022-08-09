import React from "react";
import classes from "../../utils/mergeClasses";
import styles from "./form-input.module.scss";

function FormInput({ label, id, ...otherProps }) {
	const shrink = otherProps.value.length ? styles.shrink : "";

	return (
		<div className={styles.group}>
			<input className={styles.input} id={id} {...otherProps} required />
			{label && (
				<label className={classes(shrink, styles.label)} htmlFor={id}>
					{label}
				</label>
			)}
		</div>
	);
}

export default FormInput;
