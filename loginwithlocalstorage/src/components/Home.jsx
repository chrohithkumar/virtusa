import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    const navigate=useNavigate();

    
        const handleLogout=()=>{
            
           


            alert('Logout Sucessfull')
                navigate('/')

            

        }


  return (



    <div >
        <ToastContainer/>
        <div className='Wrapper'>
        <h1>Welcome {localStorage.getItem('username')}</h1>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
        </div>
        

    </div>
  )
}