import React, { useState } from "react";
import { signInUserWithEmail } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import DividerText from "../divider-text/divider-text.component";
import FormInput from "../form-input/form-input.component";
import GoogleButton from "../google-button/google-button.component";
import "./sign-in-form.styles.scss";

function SignInForm({ handleGoogle }) {
	const defaultFormFields = {
		email: "",
		password: "",
	};
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormFields((fields) => ({
			...fields,
			[id]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const cred = await signInUserWithEmail(email, password);
			console.log(cred);
		} catch (err) {
			// auth/wrong-password
			// auth/user-not-found
			console.error(err.message);
		}
	};

	return (
		<section className="sign-in-container">
			<h2>I already have an account</h2>
			<GoogleButton onClick={handleGoogle}>Sign in with Google</GoogleButton>
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
