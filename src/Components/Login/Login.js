import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './Login.css';

const Login = () => {

    const [email, updateEmail] = useState('');
    const [password, updatePassword] = useState('');

    return(
        <div className="Main">
            <div className="Inputs">
                <span>TMLNE</span>
                <input type="text" placeholder="Email" 
                    onChange={e => updateEmail(e.target.value)}/>
                <input type="password" placeholder="Password" 
                    onChange={e => updatePassword(e.target.value)}/>
                <span id="Enter-Button" onClick={() => console.log(email, password)}><Link to="/home">Login</Link></span>
                <span>Don't have an account? <Link to="/register">Register here:</Link></span>
            </div>
        </div>
    )
}

export default Login;