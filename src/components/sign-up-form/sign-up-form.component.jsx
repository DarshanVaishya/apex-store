import { useState } from "react";
import {
	createUserAuthFromEmail,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.-form.styles.scss";

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
	console.log(formFields);

	return (
		<section className="sign-up-container">
			<h2>Don't have an account?</h2>
			<p>Sign up with your email and password</p>
			<form onSubmit={handleSubmit}>
				<FormInput
					id="displayName"
					value={displayName}
					onChange={handleChange}
					label="Display name"
				/>

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

				<FormInput
					type="password"
					id="confirmPassword"
					value={confirmPassword}
					onChange={handleChange}
					label="Confirm password"
				/>

				<Button type="submit">Sign up</Button>
			</form>
		</section>
	);
}

export default SignUpForm;
