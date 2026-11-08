import React from 'react'
import "../App.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Calculate() {



    const [num1, setCount] = useState(78 );

    //const num1 = 0;

    const increment = ()=>{
        //num1 +=1;
        setCount(num1+1);
    };

    const decrement = ()=>{
        //num1 -=1;
        setCount(num1-1);
    };

  return (
     
    <div>
        <h1 align ="center">calculate page</h1>

        <div className='groupcal'>
          <span className='title'>The number is {num1}</span> <br></br> <br></br>
          <button className='button1' onClick={decrement}>-</button> <button className='button2' onClick={increment}>+</button>
        </div> 
    
    <Link to ="/Event">go to the event</Link>
    </div>
  )
}


