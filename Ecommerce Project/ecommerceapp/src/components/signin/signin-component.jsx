import React from 'react';
import './signin-styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// import { signInWithFacebook } from '../../firebase/firebase.utility';
import {auth, signInWithGoogle } from '../../firebase/firebase.utility';
class Signin extends React.Component {
    constructor() {
        super();
        this.state = {
            email:'',
            password:''
        }
    }
    // handling the submit and initialize email and password
    handleSubmit = async (event) => {
        event.preventDefault();
        const {email,password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            
            this.setState({email:'',password:''});
            
        }catch(error) {
            console.error(error);
        }
        
    } 
    // set the value of email and password
    handleChange = (event) => {
        const{name,value} = event.target;
        this.setState({[name]:value});
    } 
    render() {
        return (
            <div className="sign-in">
             <h2>I have already an account</h2>
             <span>Sign in with your email and password</span>
             <form onSubmit={this.handleSubmit}>
                <FormInput type="email" 
                name="email" 
                value={this.state.email} 
                label="email"
                handleChange={this.handleChange}
                required/>
                
                <FormInput type="password" 
                name="password" 
                value={this.state.password}
                label="password" 
                handleChange={this.handleChange} 
                required/>
                <div className="buttons">
                    <CustomButton type="submit">SUBMIT FORM</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> GOOGLE</CustomButton> 
                </div>
             </form>
            </div>
        )
    }
}

export default Signin;
/*
{
    apiKey: "AIzaSyDq7eZtF9tCx9xL7K00-Ymc3SMpZo7jG8M",
    authDomain: "ecommerceapp-6b082.firebaseapp.com",
    databaseURL: "https://ecommerceapp-6b082.firebaseio.com",
    projectId: "ecommerceapp-6b082",
    storageBucket: "ecommerceapp-6b082.appspot.com",
    messagingSenderId: "824539907964",
    appId: "1:824539907964:web:75f8c4184e2e1e2f9b86f9",
    measurementId: "G-2Q3XLZ621C"
    <CustomButton onClick={signInWithFacebook} isFacebookSignIn>FACEBOOK</CustomButton>

     <CustomButton onClick={signInWithGoogle} isGoogleSignIn> GOOGLE</CustomButton>
  }
  */