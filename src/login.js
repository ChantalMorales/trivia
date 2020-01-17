import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
//import App from './forms';



const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
    render(){
        const {user, signOut, signInWithGoogle} = this.props; 
        return (
            <div>
                {
                    user ? <p>Hello, {user.displayName}</p>: <p>Please Sign in</p>
                }
                {
                    
                    user? 
                    
                    <button onClick={signOut}>Sign out</button>
                    : 
                    <button onClick={signInWithGoogle}>Sign in with Google</button>
                }
                {
                //     user? ReactDOM.render(<App />,document.getElementById('root')):
                //     ReactDOM.render(<Login />,document.getElementById('root'))
                }
            </div>
        );
    }
}

const firebaseAppAuth= firebaseApp.auth();
const providers ={
    googleProvider : new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);