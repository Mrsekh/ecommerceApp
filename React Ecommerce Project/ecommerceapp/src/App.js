import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch,Redirect } from 'react-router-dom';
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
					<Route exact path="/signin" render = {() =>  this.props.currentUser ? 
						(<Redirect to ='/'/>) :
						 (<SignInSignUp/>) }/>
				</Switch>
			</div>
		);
	}
}


const mapStateToProps = ({user}) => ({
	currentUser: user.currentUser
})
const mapDispatchToProps  = (dispatch) => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})
/* null is the mapStateToProps because it is  not used 
	to do anything except setting the currentUser
*/
export default connect(mapStateToProps,mapDispatchToProps)(App);
