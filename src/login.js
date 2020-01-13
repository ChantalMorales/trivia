import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase';
import 'firebase/auth';
//import styles from './styles/styles.css'; 
import './styles/styles.css'; 
import firebaseConfig from './firebaseConfig';
//import App from './forms';



const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
    render(){
        const {user, signOut, signInWithGoogle} = this.props; 
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                <h1 className="box-layout__title">Quiz App</h1>
                {
                    user ? <p>Hello, {user.displayName}</p>: <p>Please Sign in</p>
                }
                {
                    
                    user? 
                    
                    <button className="button" onClick={signOut}>Sign out</button>
                    : 
                    <button className="button" onClick={signInWithGoogle}>Sign in with Google</button>
                }
                {
                //     user? ReactDOM.render(<App />,document.getElementById('root')):
                //     ReactDOM.render(<Login />,document.getElementById('root'))
                }
                </div>
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