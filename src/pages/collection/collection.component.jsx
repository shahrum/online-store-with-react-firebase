import React from "react";

import "./collection.styles.scss";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";

const CollectionPage = ({ collection }) => {
	console.log("ey collection ", collection);
	return (
		<div className="collection-page">
			<h2>COLLECTION PAGE</h2>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		collection: selectCollection(ownProps.match.params.collectionId)(state),
	};
};

// const mapStateToProps = (state, ownProps) =>
// 	createStructuredSelector({
// 		shahram: selectCollection(ownProps.match.params.collectioId),
// 	});

export default connect(mapStateToProps)(CollectionPage);
