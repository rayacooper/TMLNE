import React from 'react';
import {Switch, Route} from  'react-router-dom';

import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';

export default (
    <Switch>
        <Route path="/home">
            <Home />
        </Route>

        <Route path="/register">
            <Register />
        </Route>
        
        <Route path="/profile">
            <Profile />
        </Route>

        <Route path="/">
            <Login />
        </Route>
    </Switch>
);
