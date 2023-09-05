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
    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        if (username === '') {
            toast.warning('Please enter UserName');
        }
          if (email === '') {
            toast.warning('Please enter email');
        } 
         if (password === '') {
            toast.warning('Please enter password');
        } 
         if (confirmpassword === '') {
            toast.warning('Please enter Confirm Password');
        } 

       
        
        else {
            if(confirmpassword === password)
            {
                console.log(username, email,password, confirmpassword);

            localStorage.setItem('username',username);
            localStorage.setItem('email',email);
            localStorage.setItem('password',password);
            localStorage.setItem('confirmpassword',confirmpassword);
            alert("Register Sucessfull");
            navigate('/');

                
            }
            else{
                toast.warning('password and confirm password are mismatch');
            }
            
        }
    }

    return (
        <div>
            <ToastContainer/>
            <div className='Wrapper'>
                <input type='text' placeholder='Enter the UserName' value={username} onChange={(e) => setusername(e.target.value)}></input>
                <br/><br/>
                <input type='text' placeholder='Enter the Email' value={email} onChange={(e) => setemail(e.target.value)}></input>
                <br/><br/>
                <input type='password' placeholder='Enter the Password' value={password} onChange={(e) => setPassword(e.target.value)}></input> 
                <br/><br/>
                <input type='password' placeholder='Enter the Confirm Password' value={confirmpassword} onChange={(e) => setconfrimpasssword(e.target.value)}></input> 
                <br/><br/>
            </div>
            <div className='button'>
                <button onClick={handleSubmit}>Submit</button>
                &nbsp; &nbsp;Already Registered &nbsp;<a href='/'>Login</a>
            </div>
        </div>
    );
}
