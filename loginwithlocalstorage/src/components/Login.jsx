import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();

        // Retrieve the users array from localStorage
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Find a user with the entered email
        const user = existingUsers.find((user) => user.email === email);

        if(email !=='' && password !== '')
        {
            if (user && user.password === password) {
                // User found and password matches
                navigate('/Home');
                alert('Login Successful');
            } else {
                // User not found or password doesn't match
                toast.warning('Invalid Email or Password');
            }
        }
        else{
            toast.warning('Please Enter Email and Password');
        }

       
    }

    return (
        <div>
            <ToastContainer/>

            <div className='Wrapper'>
                <input type='text' placeholder='Enter the Email' value={email} onChange={handleEmail}></input>
                <br/><br/>
                <input type='password' placeholder='Enter the Password' value={password} onChange={handlePassword}></input> 
                <br/><br/>
                <div className='button'>
                    <button onClick={handleLogin}>Login</button>
                    &nbsp;&nbsp;Not Registered? <a href='/Register'>Register</a>
                </div>
            </div>
        </div>
    );
}