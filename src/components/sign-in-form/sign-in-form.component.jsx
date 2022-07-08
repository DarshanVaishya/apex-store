import React, { useState } from "react";
import Button from "../button/button.component";
import DividerText from "../divider-text/divider-text.component";
import FormInput from "../form-input/form-input.component";
import GoogleButton from "../google-button/google-button.component";

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
	console.log(formFields);

	return (
		<section>
			<h2>I already have an account</h2>
			<GoogleButton onClick={handleGoogle}>Sign in with Google</GoogleButton>
			<DividerText>OR</DividerText>
			<span>Sign in with your email and password</span>
			<FormInput
				type="email"
				id="email"
				value={email}
				onChange={handleChange}
				label="Email"
			/>

			<FormInput
				type="password"
				id="password"
				value={password}
				onChange={handleChange}
				label="Password"
			/>

			<Button type="submit">Sign in</Button>
		</section>
	);
	// TODO: Add onClick method to the submit button
}

export default SignInForm;
