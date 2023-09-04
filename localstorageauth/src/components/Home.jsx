import React from "react";
import './Signup.css';

function Home(){
    const logout=()=>{
        localStorage.removeItem("signup")
        window.location.reload()

    }
    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }
    
    return(
        <div className="wrapper">
            <h1>Home Page </h1>
            <p>Wellcome {localStorage.getItem('name')}</p>
            <button onClick={logout} className="logout">LogOut</button>
            <button onClick={deleteAccount} className="delete">Delete</button>
        </div>
    );
}


export default Home;