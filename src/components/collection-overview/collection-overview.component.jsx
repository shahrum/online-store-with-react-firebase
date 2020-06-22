import React from "react";

import "./collection-overview.styles.scss";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../preview-collection/collection-preview.component";

const CollectionOverview = ({ collections }) => {
	return (
		<div className="collection-overview">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
