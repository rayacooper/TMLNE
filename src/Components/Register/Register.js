import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './../Login/Login.css';

const Register = () => {

    const [email, updateEmail] = useState('');
    const [password1, updatePassword1] = useState('');
    const [password2, updatePassword2] = useState('')

    return(
        <div className="Main">
            <div className="Inputs">
                <span>TMLNE</span>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password" 
                    onChange={e => updatePassword1(e.target.value)}/>
                <input type="password" placeholder="Retype Password" 
                    onChange={e => updatePassword2(e.target.value)}/>
                <span id="Enter-Button" onClick={console.log(password1 === password2 ? "Way to go" : "Password's don't match!")}>
                    <Link to="/home">Create Account</Link>
                </span>
                <span>Already registered? <Link to="/">Login here:</Link></span>
            </div>
        </div>
    )
}

export default Register;