import React from 'react';
import {Link} from 'react-router-dom';

import './Login.css';

const Login = () => {
    return(
        <div className="Main">
            <div className="Inputs">
                <span>TMLNE</span>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password" />
                <div id="Enter-Button"><Link to="/home"><span>Login</span></Link></div>
                <span>Don't have an account? <Link to="/register">Register here:</Link></span>
            </div>
        </div>
    )
}

export default Login;