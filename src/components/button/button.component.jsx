import styles from "./button.module.scss";

const BUTTON_TYPE_CLASSES = {
	google: "google-sign-in",
	inverted: "inverted",
};

function Button({ children, buttonType, ...otherProps }) {
	const key = BUTTON_TYPE_CLASSES[buttonType];

	return (
		<button
			className={`${styles.container} ${styles[key] || ""}`}
			{...otherProps}
		>
			{children}
		</button>
	);
}

export default Button;
