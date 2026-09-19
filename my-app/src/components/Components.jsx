import React from 'react'
import './Components.css'
const Components = (props) => {
  return (
   
        <div className='componets_container'>
      <p id='name'> {props.name}</p>
      <img  id='image' src={props.image} alt={props.name} />
      <p id='description'>{props.desc}</p>
    </div>
    
  )
}

export default Components
