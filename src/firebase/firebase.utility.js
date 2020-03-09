import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyDq7eZtF9tCx9xL7K00-Ymc3SMpZo7jG8M",
    authDomain: "ecommerceapp-6b082.firebaseapp.com",
    databaseURL: "https://ecommerceapp-6b082.firebaseio.com",
    projectId: "ecommerceapp-6b082",
    storageBucket: "ecommerceapp-6b082.appspot.com",
    messagingSenderId: "824539907964",
    appId: "1:824539907964:web:75f8c4184e2e1e2f9b86f9",
    measurementId: "G-2Q3XLZ621C"
  };
  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`); 
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
      const {displayName,email} = userAuth;
      const createdAt = new Date();
    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error) {
      console.log(`Error in creating the user ${error.message}`);
    }
  }
    //console.log(userRef);
    return userRef;
}
    
  

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = [new firebase.auth.FacebookAuthProvider(),new firebase.auth.GoogleAuthProvider()];
       
      provider[0].setCustomParameters({'display': 'popup'});
      export const signInWithFacebook = () => auth.signInWithPopup(provider[0]);
    
   
      provider[1].setCustomParameters({'prompt': 'select_account'});
      export const signInWithGoogle = () => auth.signInWithPopup(provider[1]);
 
  
 export default firebase;