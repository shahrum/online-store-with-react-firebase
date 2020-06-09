import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
	children,
	handleclick,
	isGoogleSignIn,
	...otherProps
}) => (
	<button
		className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
		onClick={handleclick}
	>
		{children}
	</button>
);
export default CustomButton;
