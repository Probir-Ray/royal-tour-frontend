import React from 'react';
import useAuth from '../../../hooks/useAuth';
import initAuthentication from '../Firebase/firebase.init';
import { useLocation, useHistory } from 'react-router-dom';
import './Login.css';

initAuthentication();

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/' || '/add-new-plan';
    console.log(location.state?.from);
    
    const handleGoogleLogin = () => {
    	signInUsingGoogle()
    	.then(result => {
            history.push(redirect_uri);
        })
    }
    return (
        <div className='my-4 py-4 container text-center box-container'>
            <h2 className='mb-4'>Login Page</h2>
            <button onClick={handleGoogleLogin} className="btn btn-danger">Google Sign In</button>
            <br/>
            <br/>
        </div>
    );
};

export default Login;