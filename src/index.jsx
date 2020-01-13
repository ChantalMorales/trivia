import React from 'react'
import ReactDOM from 'react-dom'
import App from './forms';
import Login,{firebaseAppAuth} from './login';
import './styles/styles.css'; 
import registerServiceWorker from './registerServiceWorker';
//import {firebase} from './firebaseConfig'; 


ReactDOM.render(<Login />,document.getElementById('root'))

firebaseAppAuth.auth().onAuthStateChanged((user)=> {
    if(user){
        ReactDOM.render(<App />,document.getElementById('root'));
    }else{
        ReactDOM.render(<Login />,document.getElementById('root'));
    }
})
registerServiceWorker();