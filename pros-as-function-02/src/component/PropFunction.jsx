import './PropFunction.css'
import React from 'react'

const PropFunction = (props) => {
  return (
    <div>
        
      <button onClick={props.counting} id='btn'>{props.name}</button>
    {props.children}
    
    </div>
  )
}

export default PropFunction
