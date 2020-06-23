import React from "react";

import "./stripe-button.styles.scss";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const convertedPriceFromCentToDollar = price * 100;
	const publishableKey =
		"pk_test_51GwjTkCX34KJJj2XdCjRXH6ZYrQ0dE8mMw0Vcx4tuTVGLn6PKDTCxFsxAfZFv1GYIdyvxK6TdBObhAWSpDY6GQAN00s5x4drvg";

	const onToken = (token) => {
		console.log("token", token);
		alert("Payment Successful");
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd"
			shippingAddress
			billingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Yout total is $${price}`}
			amount={convertedPriceFromCentToDollar}
			panelLabel=" Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
