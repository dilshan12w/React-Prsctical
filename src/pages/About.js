import React from 'react'
import { Button } from 'react-bootstrap'
import {Link,useNavigate} from 'react-router-dom'
 

export default function About() {
 
  const navigate = useNavigate();
    return (
    <div>
      <h1>About page</h1>
      <Link to = "/Contact">Go to the cantact</Link>
      <br></br>

     <Button onClick ={()=> navigate ("/Contact")}> Cantact</Button> <br></br><br></br> 
     <Button onClick ={()=> navigate ("/Galery")}> Galery</Button>
    

    </div>
  )
}

