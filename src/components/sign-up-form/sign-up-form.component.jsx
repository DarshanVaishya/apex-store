import React, { useState } from "react";
import {
	createUserAuthFromEmail,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

function SignUpForm() {
	const defaultFormFields = {
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	};
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

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

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			return alert("Password and confirm password must match.");
		}

		try {
			const { user } = await createUserAuthFromEmail(email, password);
			await createUserDocumentFromAuth({
				...user,
				displayName,
			});
			resetFormFields();
		} catch (err) {
			if (err.code === "auth/email-already-in-use") {
				alert("This email is already registered. Please log in.");
			}
			console.error(err.message);
		}
	};

	return (
		<div>
			<h2>Don't have an account? Sign up!</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="displayName">Display name</label>
				<input
					type="text"
					id="displayName"
					value={displayName}
					onChange={handleChange}
					required
				/>

				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={handleChange}
					required
				/>

				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={handleChange}
					required
				/>

				<label htmlFor="confirmPassword">Confirm password</label>
				<input
					type="password"
					id="confirmPassword"
					value={confirmPassword}
					onChange={handleChange}
					required
				/>

				<button type="submit">Sign up</button>
			</form>
		</div>
	);
}

export default SignUpForm;
