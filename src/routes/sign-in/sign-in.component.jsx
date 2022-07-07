import React from "react";
import {
	createUserDocumentFromAuth,
	signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

function SignIn() {
	const logGoogleUser = async () => {
		const cred = await signInWithGooglePopup();
		await createUserDocumentFromAuth(cred.user);
	};

	return (
		<div>
			<h1>Sign in page</h1>
			<button onClick={logGoogleUser}>Sign in with google popup</button>
		</div>
	);
}

export default SignIn;
