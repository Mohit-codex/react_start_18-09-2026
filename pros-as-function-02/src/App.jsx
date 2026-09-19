import { useState } from 'react'
import NewFunction from'./component/PropFunction.jsx'
import './App.css'

function App() {
  const[count,setcount]=useState(0);
   function countValue(){
    setcount(count+1); 
  }

  return (
  <div>
<NewFunction counting={countValue} name="click me">

<h1>you have clicked {count} times </h1>
</NewFunction>
  </div>
  )
}

export default App
