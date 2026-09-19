import { useState } from 'react'
import  Children from './component/children.jsx'
import './App.css'

function App() {
 const[count,setCount]=useState(0);
 function for_usedsate(){
  setCount(count+1);
 }

  return (
    <div>
     

  <Children id='new_button' new_varaible={for_usedsate} name='click me' >
 <h1>{count}</h1>

  </Children>
 
  

    </div>
  )
}

export default App
