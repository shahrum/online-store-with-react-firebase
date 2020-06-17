import React from "react";

import "./cart-dropdown.styles.scss";

import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import CartItem from "../cart-item/cart-item.component";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { withRouter } from "react-router-dom";

const CartDropDown = ({ cartItems, history, dispatch }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((cartItem) => {
						return <CartItem key={cartItem.id} item={cartItem} />;
					})
				) : (
					<span className="empty-message">Your cart is empty</span>
				)}
			</div>
			<CustomButton
				handleclick={() => {
					history.push("/checkout");
					dispatch(toggleCartHidden());
				}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
