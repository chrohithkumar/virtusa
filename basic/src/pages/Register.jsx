import React, { useState } from 'react';
import './Register.css'
import axios from 'axios';

export default function Register() {
  const [username,setusername]=useState('');
  const [password,setpassword]=useState('');
  const [mobilenumber,setmobilenumber]=useState('');
  const [email,setemail]=useState('');
  const [confirmpassword,setconfrimpassword]=useState('');
  const [errors,setErrors]=useState({});
    
  const validationform=()=>{
    const errors={};
    if(!username){
      errors.username='UserName is Required';
    }
    
    if(!password){
      errors.password="Password is Reqired";
    }
    else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(password)
    ) {
      errors.password =
        'Invalid Password. Must contain at least one number, one uppercase letter, one lowercase letter, one special character (!@#$%^&*), and be at least 8 characters long';
    } else {
      setpassword(''); // Clear the password error message
    }

    
    if(!mobilenumber){
      errors.mobilenumber="MobileNumber is Required";
    }
    else if(!/^\d{10}$/.test(mobilenumber)){
        errors.mobilenumber="Invaild MobileNumber";
    }

    if(!email){
      errors.email="email is Required";
    }
    else if(!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/.test(email)){
      errors.email="invaild Email"

    }

    if(!confirmpassword){
      errors.confirmpassword="confirm password is Required"
    }
    if(confirmpassword!==password){
      errors.confirmpassword=" Password & Confirm Password doesnot Match"
    }
    setErrors(errors);
    // Return true if there are no errors
    return Object.keys(errors).length === 0;

  }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(validationform()){
          const data={
            username:username,
            password:password,
            mobilenumber:mobilenumber,
            email:email,
            confirmpassword:confirmpassword
  
          }
          const url="http://localhost:64170/api/Register";
          axios.post(url,data).then((result)=>{
            console.log(result.data)
            if(result.data==="Registration Sucessfull")
            {
              alert("Registration Sucessfully completed");
            }
            if(result.data==="Email is already registered"){
              alert(" These Email is already registered.So please login");
            }
          })
         
          console.log(data);
          setusername('');
          setemail('');
          setconfrimpassword('');
          setmobilenumber('');
          setpassword('');

        }
        
      
    }

  return (

    <div className='Signup'>
      
      <center>
      <h2>Registor</h2>
      <form  onSubmit={handleSubmit}>
      <div className='input'>
        <label>UserName</label>
        <input type='text' value={username} onChange={(e)=>setusername(e.target.value)} placeholder='Enter UserName' ></input>
        {errors.username && <span >{errors.username}</span>}
        
        <br/>

        <label>Email</label>

         <input type='text' value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Enter Email'></input>
         {errors.email && <span>{errors.email}</span>}
        <br/>


        <label>MobileNumber</label>

        <input type='text' value={mobilenumber} onChange={(e)=>setmobilenumber(e.target.value)} placeholder='Enter MobileNumber'></input>
        {errors.mobilenumber && <span>{errors.mobilenumber}</span>}
        <br/>


        <label>Password</label>

        <input type='password' value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Enter Password'></input>
        {errors.password && <span>{errors.password}</span>}
        <br/>

        <label>Confirm Password</label>

        <input type='password' value={confirmpassword} onChange={(e)=>setconfrimpassword(e.target.value)} placeholder='Enter ConfirmPassword'></input>
        {errors.confirmpassword && <span>{errors.confirmpassword}</span>}
        <br/>
        <div>
          <button className='Submitbutton'  onClick={handleSubmit}>Submit</button>
        </div>
        Already a user? <a href='/' id='signinLink'  data-testid="signinLink">Login</a>
       
      </div>
      </form>

      
      </center>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      
    </div>
  )
}