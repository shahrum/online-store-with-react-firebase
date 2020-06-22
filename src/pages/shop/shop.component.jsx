import React from "react";

import "./shop.styles.scss";

import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match, location, history }) => {
	console.log("my props", match);
	return (
		<div className="shop-page">
			<Route exact component={CollectionOverview} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
			{/* <CollectionOverview /> */}
		</div>
	);
};
export default ShopPage;
