import React from 'react'
import ReactDOM from 'react-dom'
import App from './forms';
import firebaseConf from './firebase/firebase'
import registerServiceWorker from './registerServiceWorker';
//import Login from './login';

ReactDOM.render(<App />,document.getElementById('root'))
registerServiceWorker();