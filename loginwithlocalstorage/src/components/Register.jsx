import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfrimpasssword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === '' || email === '' || password === '' || confirmpassword === '') {
            toast.warning('Please enter all credentials');
        } else if (confirmpassword !== password) {
            toast.warning('Password and confirm password are mismatch');
        } else {
            // Retrieve the existing user data from localStorage or initialize an empty array
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

            // Check if the username or email already exists
            const isUserExists = existingUsers.some((user) => user.username === username || user.email === email);

            if (isUserExists) {
                toast.warning('Username or email already exists');
            } else {
                // Create a new user object
                const newUser = {
                    username,
                    email,
                    password,
                };

                // Add the new user to the existingUsers array
                existingUsers.push(newUser);

                // Save the updated user data to localStorage
                localStorage.setItem('users', JSON.stringify(existingUsers));
            
                localStorage.setItem('username',username);
                alert('Registration Successful');
                navigate('/');
            }
        }
    };

    return (
        <div>
            <ToastContainer />
            <div className='Wrapper'>
                <input type='text' placeholder='Enter the UserName' value={username} onChange={(e) => setusername(e.target.value)}></input>
                <br />
                <br />
                <input type='text' placeholder='Enter the Email' value={email} onChange={(e) => setemail(e.target.value)}></input>
                <br />
                <br />
                <input type='password' placeholder='Enter the Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <br />
                <br />
                <input
                    type='password'
                    placeholder='Enter the Confirm Password'
                    value={confirmpassword}
                    onChange={(e) => setconfrimpasssword(e.target.value)}
                ></input>
                <br />
                <br />
            </div>
            <div className='button'>
                <button onClick={handleSubmit}>Submit</button>
                &nbsp; &nbsp;Already Registered &nbsp;<a href='/'>Login</a>
            </div>
        </div>
    );
}