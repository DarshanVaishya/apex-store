import React from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
	createUserDocumentFromAuth,
	signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import "./sign-in.styles.scss";

function SignIn() {
	const logGoogleUser = async () => {
		const cred = await signInWithGooglePopup();
		await createUserDocumentFromAuth(cred.user);
	};

	return (
		<div className="sign-in-page">
			<SignInForm handleGoogle={logGoogleUser} />
			<SignUpForm />
		</div>
	);
}

export default SignIn;
