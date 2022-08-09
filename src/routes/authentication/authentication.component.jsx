import React from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import styles from "./authentication.module.scss";

function Authentication() {
	return (
		<div className={styles.container}>
			<SignInForm />
			<SignUpForm />
		</div>
	);
}

export default Authentication;
