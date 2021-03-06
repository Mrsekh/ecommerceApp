import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop-component';
import Checkout from './pages/checkout/checkout.component';
import SignInSignUp from './pages/signin-signup/signin-signup-component';
import { Route, Switch,Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './components/header/header-component';
import './App.css';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selector';
import {auth ,createUserProfileDocument } from './firebase/firebase.utility';
import {setCurrentUser} from './redux/user/user.actions';
// import {collectionItemSelectorForPreview} from './redux/shop/shop.selector';
class App extends React.Component { 
	unsubscribeFromAuth = null;
	componentDidMount () {
		const {setCurrentUser} = this.props;
		auth.onAuthStateChanged(async userAuth => {
			if(userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapShot => {
					setCurrentUser({
							id:snapShot.id,
							...snapShot.data()
					})	
				});
			
			}else{
				setCurrentUser(userAuth);
			}
			// This method is used for storing the data in the database programatically
			//createCollectionAndDocument('collection',collectionItem.map(({title,items}) => ({title,items})));
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	
	render() {
		return (
			<div>
				<Header/>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route  path="/shop" component={ShopPage} />
					<Route exact path="/signin" render = {() =>  this.props.currentUser ? 
						(<Redirect to ='/'/>) :
						 (<SignInSignUp/>) }/>
					<Route exact path="/checkout" component={Checkout}/>>
				</Switch>
			</div>
		);
	}
}


const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
	//collectionItem:collectionItemSelectorForPreview
})	
	
const mapDispatchToProps  = (dispatch) => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})
/* null is the mapStateToProps because it is  not used 
	to do anything except setting the currentUser
*/
export default connect(mapStateToProps,mapDispatchToProps)(App);
