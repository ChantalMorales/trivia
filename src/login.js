import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const firebaseApp= firebase.initializeApp(firebaseConfig);

class Login extends Component{
    render(){
        const{user,signOut, signInWithGoogle }= this.props;
        return(
            <div>
                {
                    user ? 
                    <p>Hello, {user.displayName}</p>
                    : <p>Please, Sign in and add your trivia </p>
                }
                {
                    user ? <button className="button" onClick={signOut}>Sign out</button> : <button className="button" onClick={signInWithGoogle}>Sign in with Google</button>

                }
            </div>
        );
    }

}

const firebaseAppAuth = firebaseApp.auth();
const providers ={
    googleProvider : new firebase.auth.GoogleAuthProvider(),

};
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,

})(Login);
