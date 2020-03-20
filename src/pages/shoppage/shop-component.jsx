import React from 'react';
import { Route } from 'react-router-dom';
import Collectionoverview from '../../components/collection-overview/collection-overview.component';
import CollectionItemPage from '../collectionItem/collectionItem.component';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utility';
import { connect } from 'react-redux';
import { updateCollection } from '../../redux/shop/shop-action';

// HOCs
import withSpinner from '../../components/with-spinner/with-spinner.component';
const CollectionoverviewWithLoader = withSpinner(Collectionoverview);
const CollectionItemPageWithSpinner = withSpinner(CollectionItemPage);
class Shop extends React.Component {
	// authomaticalluy detects constructors and super methods
	state = {
		loading:true
	}
	componentDidMount() {
		const { updateCollectionMap } = this.props;
		const collectionRef = firestore.collection('collection');
		collectionRef.get().then(snapshot => {
			const collectionMap = convertCollectionSnapshotToMap(snapshot);

			updateCollectionMap(collectionMap);
			// After fetching of data loading should be stopped
			this.setState({loading:false})
		})
		// collectionRef.onSnapshot(async (snapshot) => {
		// 	const collectionMap = convertCollectionSnapshotToMap(snapshot);

		// 	updateCollectionMap(collectionMap);
		// 	// After fetching of data loading should be stopped
		// 	this.setState({loading:false})
		// });
		//Promise pattern
		// fetch(`https://firestore.googleapis.com/v1/projects/ecommerceapp-6b082/databases/(default)/documents/collection`)
		// .then(response => response.json())
		// .then(collection => console.log(collection));
	}

	render() {
		const { match } = this.props;
		const {loading} = this.state;
		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`} render={(props) =><CollectionoverviewWithLoader isLoading={loading} {...props}/>} />
				<Route path={`${match.path}/:collectionItemId`} render={(props) => <CollectionItemPageWithSpinner isLoading={loading}{...props}/>} />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollectionMap: (collectionMap) => dispatch(updateCollection(collectionMap))
});
export default connect(null, mapDispatchToProps)(Shop);
