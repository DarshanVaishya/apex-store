import { useEffect } from "react";
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

export const cartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	setCartItems: () => {},
	addItemToCart: () => {},
	decreaseItemFromCart: () => {},
	removeItemFromCart: () => {},
	cartTotal: 0,
	cartCount: 0,
});

export function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartTotal, setCartTotal] = useState(0);
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
		setCartCount(count);
	}, [cartItems]);

	useEffect(() => {
		const total = cartItems.reduce(
			(sum, item) => sum + item.quantity * item.price,
			0
		);
		setCartTotal(total);
	}, [cartItems]);

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
		cartTotal,
		cartCount,
	};

	return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}
