import React from "react";
import { useState } from "react";
import { createContext } from "react";

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

	return <userContext.Provider value={value}>{children}</userContext.Provider>;
}