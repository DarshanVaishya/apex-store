import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import {
	createUserDocumentFromAuth,
	onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

export const userContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

export function UserProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);
	const value = {
		currentUser,
		setCurrentUser,
	};

	const handleAuthChange = (user) => {
		setCurrentUser(user);
		console.log(user);
		if (!user) return;
		createUserDocumentFromAuth(user);
	};

	useEffect(() => {
		const unsubscribeListener = onAuthStateChangedListener(handleAuthChange);
		return unsubscribeListener;
	}, []);

	return <userContext.Provider value={value}>{children}</userContext.Provider>;
}
