import DirectoryItem from "../directory-item/directory-item.component";
import styles from "./directory.module.scss";

function Directory({ categories }) {
	return (
		<div className={styles.container}>
			{categories.map((item) => (
				<DirectoryItem key={item.id} category={item} />
			))}
		</div>
	);
}

export default Directory;
