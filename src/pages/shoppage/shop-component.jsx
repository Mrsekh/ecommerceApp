import React from 'react';
import { Route } from 'react-router-dom';
import Collectionoverview from '../../components/collection-overview/collection-overview.component';
import CollectionItemPage from '../collectionItem/collectionItem.component';
const Shop = ({ match }) => (
	<div className="shop-page">
		<Route exact path={`${match.path}`} component={Collectionoverview} />
		<Route path={`${match.path}/:collectionItemId`} component={CollectionItemPage} />
	</div>
);

export default Shop;
