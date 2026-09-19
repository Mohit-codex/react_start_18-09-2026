import './Card.css'
import React from 'react'

const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e)=>props.newName(e.target.value)

      } />
      
     <p>name name is {props.name} and title of this is {props.title}</p>
    </div>
  )
}

export default Card
