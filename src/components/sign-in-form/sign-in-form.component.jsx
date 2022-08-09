import React, { useState } from "react";
import {
	signInUserWithEmail,
	signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import DividerText from "../divider-text/divider-text.component";
import FormInput from "../form-input/form-input.component";
import GoogleButton from "../google-button/google-button.component";

import styles from "../sign-up-form/sign-up-form.module.scss";

function SignInForm() {
	const defaultFormFields = {
		email: "",
		password: "",
	};
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormFields((fields) => ({
			...fields,
			[id]: value,
		}));
	};

	const handleGoogleSignIn = async () => {
		await signInWithGooglePopup();
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await signInUserWithEmail(email, password);
			resetFormFields();
		} catch (err) {
			switch (err.code) {
				case "auth/wrong-password":
					alert("Incorrect password.");
					break;
				case "auth/user-not-found":
					alert("No user associated with this email.");
					break;
				default:
					console.error(err.message);
			}
		}
	};

	return (
		<section className={styles.form}>
			<h2>I already have an account</h2>
			<GoogleButton onClick={handleGoogleSignIn}>
				Sign in with Google
			</GoogleButton>
			<DividerText>OR</DividerText>

			<p>Sign in with your email and password</p>
			<form onSubmit={handleSubmit}>
				<FormInput
					type="email"
					id="email"
					value={email}
					onChange={handleChange}
					label="Email"
					required
				/>
				<FormInput
					type="password"
					id="password"
					value={password}
					onChange={handleChange}
					label="Password"
					required
				/>
				<Button type="submit">Sign in</Button>
			</form>
		</section>
	);
}

export default SignInForm;
