import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validationform = () => {
    const errors = {};
    if (!email.trim()) {
      errors.email = 'Email is Required';
    }
    if (!password.trim()) {
      errors.password = 'Password is Required';
    }

    setErrors(errors);
    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validationform()) {
      const data = {
        email: email,
        password: password,
      };

      const url = "http://localhost:64170/api/Login";

      axios.post(url, data).then((result) => {
        if (result.data === "Login Successful") {
          console.log(result.data);
          navigate('/Home');
          alert('Login Successful');
        } 
        else if(result.data==="incorrect password"){
          alert("incorrect password...!Please Enter the Correct Password")
        }
        else {
          alert('User does not exist ');
        }
      });

      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className='Login'>
      <center>
        <h2>Login</h2>
        <form className='LoginForm' onSubmit={handleSubmit}>
          <div className='Login-input'>
            <label>Email</label>
            <br />
            <input
              type='text'
              value={email}
              placeholder='Enter the Email'
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br />
            {errors.email && <span>{errors.email}</span>}
            <br /><br />
            <label>Password</label>
            <br />
            <input
              type='password' // Change input type to password
              value={password}
              placeholder='Enter the Password'
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <br />
            {errors.password && <span>{errors.password}</span>}
            <br /><br />
            <div>
              <button className='submitbutton' type='submit'>Submit</button> {/* Add type attribute */}
            </div>
            <div>
              New User/Admin?
              <a href='/Register' data-testid='signupLink' id='signupLink'>
                Signup
              </a>
            </div>
          </div>
        </form>
      </center>
    </div>
  );
}