import React, { useEffect, useRef, useState } from 'react';
import Home from './Home';
import './Signup.css';

export default function Signup() {
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const [setshome, setshowhome] = useState(false);
    const [show, setshow] = useState(false)

    const localname = localStorage.getItem("name")
    const localemail = localStorage.getItem('email')
    const localpassword = localStorage.getItem('password')
    const localsignup = localStorage.getItem('signup')

    useEffect(() => {
        if (localsignup) {
            setshowhome(true);
        }
        if (localemail) {
            setshow(true);
        }
    },[localemail,localsignup]); // Add localsignup and localemail as dependencies

    const handleSignUp = () => {
        if (name.current.value && email.current.value && password.current.value) {
            localStorage.setItem("name", name.current.value)
            localStorage.setItem('email', email.current.value)
            localStorage.setItem('password', password.current.value)
            localStorage.setItem('signup', email.current.value)
            alert("SignUp Successfully Completed");
            window.location.reload()
        }
    }

    const handleSignIn = () => {
        if (email.current.value === localemail && password.current.value === localpassword) {
            localStorage.setItem("signup", email.current.value); // Set the signup key here
            alert("SignIn Successfully Completed");
            setshowhome(true); // Set setshome to true
            window.location.reload()
        } else {
            alert('Please enter correct credentials')
        }
    }

    return (
        <div>
            {setshome ? <Home /> : (show ?
                <div className='wrapper'>
                    <h1>Welcome to {localname}</h1>
                    <input type='text' placeholder='Enter the Email' ref={email}></input>
                    <br /><br />
                    <input type='password' placeholder='Enter the Password' ref={password}></input>
                    <br /><br />
                    <div>
                        <button onClick={handleSignIn}>Sign In</button>
                    </div>
                </div> :
                <div className='wrapper'>
                    <input type='text' placeholder='Enter the Name' ref={name}></input>
                    <br /><br />
                    <input type='text' placeholder='Enter the Email' ref={email}></input>
                    <br /><br />
                    <input type='password' placeholder='Enter the Password' ref={password}></input>
                    <br /><br />
                    <div>
                        <button onClick={handleSignUp}>Sign Up</button>
                    </div>
                </div>)}
        </div>
    )
}
