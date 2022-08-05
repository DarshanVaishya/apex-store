import { useState, createContext } from "react";

const addCartItem = (cartItems, product) => {
	const newItems = cartItems.slice();
	const idx = newItems.findIndex((item) => item.id === product.id);

	idx !== -1
		? newItems[idx].quantity++
		: newItems.push({ ...product, quantity: 1 });

	return newItems;
};

export const cartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	setCartItems: () => {},
});

export function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const addItemToCart = (product) => {
		setCartItems(addCartItem(cartItems, product));
	};

	const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };

	return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}
