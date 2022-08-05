import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

export const productsContext = createContext({
	products: [],
});

export function ProductsProvider({ children }) {
	const [products, setProducts] = useState(PRODUCTS);
	const value = {
		products,
		setProducts,
	};

	return (
		<productsContext.Provider value={value}>
			{children}
		</productsContext.Provider>
	);
}
