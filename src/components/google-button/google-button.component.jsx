import React from "react";
import Button from "../button/button.component";

function GoogleButton({ ...props }) {
	return (
		<div>
			<Button buttonType="google" {...props}>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
					alt="Logo of Google"
				/>
				<span>Sign up with Google</span>
			</Button>
		</div>
	);
}

export default GoogleButton;
