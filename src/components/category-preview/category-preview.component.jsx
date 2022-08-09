import { Link } from "react-router-dom";
import classes from "../../utils/mergeClasses";
import ProductCard from "../product-card/product-card.component";
import styles from "./category-preview.module.scss";

function CategoryPreview({ title, products }) {
	const itemsToShow = products.slice(0, 4);

	return (
		<div className={classes(styles.container, "padding-container")}>
			<h2 className={styles.title}>
				<Link className={styles.link} to={title}>
					{title.toUpperCase()}
				</Link>
			</h2>
			<div className={styles.products}>
				{itemsToShow.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}

export default CategoryPreview;
