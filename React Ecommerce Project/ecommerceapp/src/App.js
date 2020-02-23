import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header-component';
import './App.css';
import ShopPage from './pages/shoppage/shop-component';
import SignInSignUp from './pages/signin-signup/signin-signup-component';
import {auth ,createUserProfileDocument} from './firebase/firebase.utility';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser:null
		}
	}

	componentDidMount () {
		auth.onAuthStateChanged(async userAuth => {
			if(userAuth) {
	            const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id:snapShot.id,
							...snapShot.data()
						}
					});
				},console.log(this.state.currentUser));
			}else{
				this.setState({currentUser:userAuth});
			}
		});
	}
	
	render() {
		return (
			<div>
				<Header  currentUser={this.state.currentUser}/>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/signin" component={SignInSignUp} />
				</Switch>
			</div>
		);
	}
}

export default App;
