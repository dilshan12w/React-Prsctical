import React from 'react'
import PartOne from '../components/PartOnqe'
import Button  from '../components/Button';
import Paraghaph from '../components/Paraghaph';
import Food from '../components/Food';
import Object from '../components/Object';
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to = "./About">Go to the about page</Link>





      {/* <h1 align = "center">This is my first app</h1>
            <h1 align = "left">Welcome to my page</h1>
            <PartOne/>
            <Button/>
            <Paraghaph/>
            <Food foods= "kottu"/>
            <Food foods = "Rice"/>
            <Food foods = "Parata"/>


            <Object item = "chair" price = "Rs.1890">
                <span>This is a description</span>
            </Object>

            <Object item = "desk" price = "Rs.1890">
                <button>Click me</button>
            </Object>
            <Object item = "book" price = "Rs.1890"/> */}

            

    </div>
  )
}
