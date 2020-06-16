import React from "react";

import "./cart-icon.styles.scss";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/icons/shopping-bag.svg";

const CartIcon = ({ toggleCartHidden }) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count"></span>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
