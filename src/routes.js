import React from  'react';

import {Route, Switch} from 'react-router-dom';

import App2 from './Forms';
import login from './login';

const AppRoutes = () =>
<App>
    <Switch>
        <Route path="/" component={login}/>    
        <Route path="/preguntas" component={App2}/>
    </Switch>
</App>;

export default AppRoutes;