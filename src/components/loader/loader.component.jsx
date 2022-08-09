import styles from "./loader.module.scss";

function Loader() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.loader}></div>
		</div>
	);
}

export default Loader;
