import React from "react";
import Button from "../../components/button/button.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
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
			<Button buttonType="google" onClick={logGoogleUser}>
				Sign up with Google
			</Button>
			<SignUpForm />
		</div>
	);
}

export default SignIn;
