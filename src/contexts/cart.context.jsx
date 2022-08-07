import { useEffect } from "react";
import { useRef } from "react";
import { useState, createContext } from "react";

const addCartItem = (cartItems, product) => {
	const copy = cartItems.slice();
	const item = copy.find((item) => item.id === product.id);

	if (item) {
		item.quantity++;
	} else {
		copy.push({ ...product, quantity: 1 });
	}

	return copy;
};

const decreaseCartItem = (cartItems, product) => {
	const copy = cartItems.slice();
	const item = copy.find((cartItem) => cartItem.id === product.id);

	if (item.quantity === 1) {
		return removeCartItem(copy, item);
	} else {
		item.quantity--;
	}

	return copy;
};

const removeCartItem = (cartItems, product) => {
	return cartItems.filter((item) => item.id !== product.id);
};

const getTotal = (cartItems) => {
	return cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
};

export const cartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	setCartItems: () => {},
	addItemToCart: () => {},
	decreaseItemFromCart: () => {},
	removeItemFromCart: () => {},
});

export function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);
	const [isCartOpen, setIsCartOpen] = useState(false);

	const addItemToCart = (product) => {
		setCartItems(addCartItem(cartItems, product));
	};

	const decreaseItemFromCart = (product) => {
		setCartItems(decreaseCartItem(cartItems, product));
	};

	const removeItemFromCart = (product) => {
		setCartItems(removeCartItem(cartItems, product));
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		cartItems,
		decreaseItemFromCart,
		removeItemFromCart,
	};

	return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}
