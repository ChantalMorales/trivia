
import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';

import AppRoutes from './routes';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.register();
