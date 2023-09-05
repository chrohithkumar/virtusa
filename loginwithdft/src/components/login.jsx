import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();
    const localemail=localStorage.getItem('email');
    const localpassword=localStorage.getItem('password');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (email !== '' && password !== '') {

            
            if(localemail == email && localpassword == password){
                navigate('/Home');
                alert('Login Sucessfull');

            }
            else if(localemail !== email &&  localpassword!==password){
                toast.warning('Details are Not vaild or Data not Found')

            }
            
            else if( localemail == email && localpassword !== password){
                toast.warning('Password is incorrect');
            }


            
    
        
        }
        else if(email == '' && password == ''){
                toast.warning('please enter credentials');
        }
        else if(email == ''){
            toast.warning('please enter Email');
          
        }
        else if(password ==''){
            toast.warning('please Enter Password');
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
                    &nbsp;&nbsp;Already Registered<a href='/Register'>Register</a>
                </div>

                
            </div>
        </div>
    );
}
