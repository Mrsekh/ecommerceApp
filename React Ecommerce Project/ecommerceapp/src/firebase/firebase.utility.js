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

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWIthGoogle = () => auth.signInWithPopup(provider);
  export default firebase;