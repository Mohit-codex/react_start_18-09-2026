import './children.css'
import React from 'react'
import { useState } from 'react'

const children = (props) => {
  return (
    <div>
      
        <button id='new_button' onClick={props.new_varaible}>{props.name}</button>
          
      {props.children}
    </div>
  )
}

export default children
