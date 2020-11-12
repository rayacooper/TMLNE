import React from 'react';
import {Link} from 'react-router-dom';

import './Register.css';

const Register = () => {
    return(
        <div>
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Retype Password" />
            <Link to="/home"><span>Create Account</span></Link>
            <span>Already registered? <Link to="/">Login here:</Link></span>
        </div>
    )
}

export default Register;