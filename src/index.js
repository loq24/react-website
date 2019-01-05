import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Layout from './layout';

//Pages
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import HireMe from './pages/hire-me';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
    <Switch>
        <Route path="/" exact component={Layout(Home)} />
        <Route path="/recent-projects" exact component={Layout(Portfolio)} />
        <Route path="/hire-me" exact component={Layout(HireMe)} />
    </Switch>    
</BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
