import React from 'react'

export default function Object(props) {
  return (
    <div>
        <h1>There is a {props.item}.This price is {props.price} </h1>
        {props.children}
    </div>
  )
}
