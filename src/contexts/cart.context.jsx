import { useState, createContext } from "react";

export const cartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cart: [],
	setCart: () => {},
});

export function CartProvider({ children }) {
	const [cart, setCart] = useState([]);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const value = { cart, setCart, isCartOpen, setIsCartOpen };

	return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}
