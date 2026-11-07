import React from 'react'
import "../App.css";

export default function Calculate() {

    const num1 = 0;
  return (
     
    <div>
        <h1 align ="center">calculate page</h1>

        <div className='groupcal'>
          <span className='title'>The number is {num1}</span> <br></br> <br></br>
          <button className='button1'>-</button> <button className='button2'>+</button>
        </div> 
        
    </div>
  )
}


