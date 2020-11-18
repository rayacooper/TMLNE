import React from 'react';
import {Link} from 'react-router-dom';

import './../Login/Login.css';

const Register = () => {
    return(
        <div className="Main">
            <div className="Inputs">
                <span>TMLNE</span>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Retype Password" />
                <div id="Enter-Button"><Link to="/home"><span>Create Account</span></Link></div>
                <span>Already registered? <Link to="/">Login here:</Link></span>
            </div>
        </div>
    )
}

export default Register;