import { useEffect } from "react";
import { createContext, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
// import { SHOP_DATA } from "../shop-data";

export const categoriesContext = createContext({
	categoriesMap: [],
});

export function CategoriesProvider({ children }) {
	const [categoriesMap, setCategoriesMap] = useState({});

	useEffect(() => {
		const getCategoriesMap = async () => {
			const map = await getCategoriesAndDocuments();
			setCategoriesMap(map);
		};

		getCategoriesMap();
	}, []);

	const value = { categoriesMap };

	return (
		<categoriesContext.Provider value={value}>
			{children}
		</categoriesContext.Provider>
	);
}
