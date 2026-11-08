import React from 'react'
import "../App.css";
import { Link } from 'react-router-dom'

export default function Event() {
  
    function buttonclick (){
       console.log("clicked button");
       alert("button in clicked");
    };
  return (
    <div>
      <span className='event_tittle'>React Event Handeling</span> 
      <br></br><br></br> <hr></hr>

      <button onClick ={buttonclick}>Log In</button>
    </div>
  )
}
