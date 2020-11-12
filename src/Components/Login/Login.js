import React from 'react';
import {Link} from 'react-router-dom';

import './Login.css';

const Login = () => {
    return(
        <div>
            <div className="Login Inputs">
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password" />
                <Link to="/home"><span>Login</span></Link>
                <span>Don't have an account? <Link to="/register">Register here:</Link></span>
            </div>
        </div>
    )
}

export default Login;