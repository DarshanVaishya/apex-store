import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

function SignIn() {
	const logGoogleUser = async () => {
		const response = await signInWithGooglePopup();
		console.log(response);
	};

	return (
		<div>
			<h1>Sign in page</h1>
			<button onClick={logGoogleUser}>Sign in withgoogle popup</button>
		</div>
	);
}

export default SignIn;
