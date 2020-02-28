import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './components/header/header-component';
import './App.css';
import ShopPage from './pages/shoppage/shop-component';
import SignInSignUp from './pages/signin-signup/signin-signup-component';
import {auth ,createUserProfileDocument} from './firebase/firebase.utility';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component { 
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
				console.log(setCurrentUser);
				setCurrentUser(userAuth);
			}
		});
	}
	
	render() {
		return (
			<div>
				<Header/>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/signin" component={SignInSignUp} />
				</Switch>
			</div>
		);
	}
}

const mapDispatchToProps  = (dispatch) => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})
/* null is the mapStateToProps because it is  not used 
	to do anything except setting the currentUser
*/
export default connect(null,mapDispatchToProps)(App);
