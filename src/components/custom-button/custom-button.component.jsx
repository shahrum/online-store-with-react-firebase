import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
	children,
	handleclick,
	isGoogleSignIn,
	inverted,
	...otherProps
}) => (
	<button
		className={`${inverted ? "inverted" : ""} ${
			isGoogleSignIn ? "google-sign-in" : ""
		} custom-button`}
		onClick={handleclick}
	>
		{children}
	</button>
);
export default CustomButton;
