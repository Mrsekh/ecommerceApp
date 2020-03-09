import React from 'react';
import './signup.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utility';

class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmpassword:'',
        }
    }
    // Handle the submit event 
    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName,email,password,confirmpassword} = this.state;
        if(password !== confirmpassword) {
            alert("password don't match");
            return;
        }
        try {
            // create a user ith given email and password
            const {user} =  await auth.createUserWithEmailAndPassword(email,password);
            // create a user in firebase with email and password
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmpassword:'' 
            })
        }
        catch(error) {
            console.error(error);
        }
        
    }

    handleChange = (event) => {
        const {name,value} = event.target;
        // console.log(event.target);
        this.setState({[name]:value});
    }
    render() {
        const {displayName,email,password,confirmpassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I don't have any account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput  
                    type='text'
                    name='displayName'
                    value={displayName}
                    label='Name'
                    onChange={this.handleChange}
                    required
                />
                <FormInput  
                    type='email'
                    name='email'
                    value={email}
                    label='Email'
                    onChange={this.handleChange}
                    required
                />
                <FormInput  
                    type='password'
                    name='password'
                    value={password}
                    label='Password'
                    onChange={this.handleChange}
                    required
                />
                <FormInput  
                    type='password'
                    name='confirmpassword'
                    value={confirmpassword}
                    onChange={this.handleChange}
                    label='ConfIrm password'
                    required
                />
                <CustomButton type="submit"> SIGNUP </CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;

