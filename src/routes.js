import React from  'react';

import {Route, Switch} from 'react-router-dom';

import App from './App';
import login from './login';

const AppRoutes = () =>
<App>
    <Switch>
        <Route path="/" component={login}/>    
        <Route path="/preguntas" component={App}/>
    </Switch>
</App>;

export default AppRoutes;