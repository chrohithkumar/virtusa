import React, { useState } from 'react'
import KeyBoard from './KeyBoard';
import './Calculator.css'

export default function Calculator() {
    const [input,setinput]=useState('');

    const handleClicked=(value)=>{
        let total=input+value;
        setinput(total);
    }
    const handleclear=()=>{
      setinput("");
    }
    const handlecal=()=>{
      let ans=eval(input);
      setinput(ans);

    }
  return (
    

    <div>
      <h4>Online Calus</h4>
      <div className='inputScreen'>
        <input type='text' className='input' value={input}></input>
      </div>
      <KeyBoard handleclicked={handleClicked} handleclear={handleclear} handlecal={handlecal} />
    
    </div>
  )
}
