import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyA4sHkOwFx2rAjzgVgfxkktqU5fcUN_pU8",
	authDomain: "apex-store-db.firebaseapp.com",
	projectId: "apex-store-db",
	storageBucket: "apex-store-db.appspot.com",
	messagingSenderId: "407675975299",
	appId: "1:407675975299:web:80ff16de9b10ef42150db6",
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
