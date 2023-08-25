import React from 'react';
import './KeyBoard.css';

export default function KeyBoard({handleclicked,handleclear,handlecal}) {
  return (
    <div>
      <div className='App'>
        <div className='row'>
          <button onClick={()=>{handleclicked("7")}} className="digit">7</button>
          <button onClick={()=>{handleclicked("8")}} className='digit'>8</button>
          <button onClick={()=>{handleclicked("9")}} className='digit'>9</button>
          <button onClick={()=>{handleclicked("/")}} className='operator'>/</button>
        </div>
        <div className='row'>
          <button onClick={()=>{handleclicked("4")}} className="digit">4</button>
          <button onClick={()=>{handleclicked("5")}} className='digit'>5</button>
          <button onClick={()=>{handleclicked("6")}} className='digit'>6</button>
          <button onClick={()=>{handleclicked("*")}} className='operator'>*</button>
        </div>
        <div className='row'>
          <button onClick={()=>{handleclicked("1")}} className="digit">1</button>
          <button onClick={()=>{handleclicked("2")}} className='digit'>2</button>
          <button onClick={()=>{handleclicked("3")}} className='digit'>3</button>
          <button onClick={()=>{handleclicked("+")}} className='operator'>+</button>
        </div>
        <div className='row'>
          <button onClick={()=>{handleclicked("0")}} className="digit">0</button>
          <button onClick={()=>{handlecal()}} className='fun'>=</button>
          <button onClick={()=>{handleclear()}} className='fun'>cc</button>
          <button onClick={()=>{handleclicked("-")}} className='operator'>-</button>
        </div>
      </div>
    </div>
  )
}

