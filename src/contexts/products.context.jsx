import { createContext, useState } from "react";
// import { SHOP_DATA } from "../shop-data";

export const productsContext = createContext({
	products: [],
});

export function ProductsProvider({ children }) {
	const [products, setProducts] = useState([]);
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
