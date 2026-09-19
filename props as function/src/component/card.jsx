import './card.css'
import { useState } from 'react'
import React from 'react'

const card = () => {
    const [count,setCount]=useState(0);
  return (
    <div className='counter'>
      <h1>you have clicked {count} times</h1>
      <button className='btn' onClick={()=>{
        setCount(count+1)
      }}>click me</button>
    </div>
  )
}

export default card
