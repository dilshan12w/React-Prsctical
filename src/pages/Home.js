import React from 'react'
import PartOne from '../components/PartOnqe'
import Button  from '../components/Button';
import Paraghaph from '../components/Paraghaph';
import Food from '../components/Food';
import Object from '../components/Object';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h1 align = "center">This is my first app</h1>
            <h1 align = "left">Welcome to my page</h1>
            <PartOne/>
            <Button/>
            <Paraghaph/>
            <Food foods= "kottu"/>
            <Food foods = "Rice"/>
            <Food foods = "Parata"/>


            <Object item = "chair"/>
            <Object item = "desk"/>
            <Object item = "book"/>

            

    </div>
  )
}
