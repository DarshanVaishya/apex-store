import { useNavigate } from "react-router-dom";
import styles from "./directory-item.module.scss";

import directoryStyles from "../directory/directory.module.scss";
import classes from "../../utils/mergeClasses";

function DirectoryItem({ category }) {
	const { title, imageUrl } = category;
	const navigate = useNavigate();
	const clickHandler = () => navigate(`/shop/${title}`);

	return (
		<div
			className={classes(styles.container, directoryStyles["item-container"])}
			onClick={clickHandler}
		>
			<img className={styles.img} src={imageUrl} alt={`Category of ${title}`} />
			<div className={styles.body}>
				<h2>{title}</h2>
				<p className={styles.cta}>Shop now</p>
			</div>
		</div>
	);
}

export default DirectoryItem;
