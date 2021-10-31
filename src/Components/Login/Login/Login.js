import React from 'react';
import useAuth from '../../../hooks/useAuth';
import initAuthentication from '../Firebase/firebase.init';
import './Login.css';

initAuthentication();

const Login = () => {
    const {signInUsingGoogle} = useAuth();

    return (
        <div className='my-4 py-4 container text-center box-container'>
            <h2 className='mb-4'>Login Page</h2>
            <button onClick={signInUsingGoogle} className="btn btn-danger">Google Sign In</button>
            <br/>
            <br/>
        </div>
    );
};

export default Login;