import { useState } from 'react'

import './App.css'
import Card from './component/Card.jsx'
function App() {
 
const[name,setname]=useState('');

  return (
   <div className='main_container'>
<Card  name={name} newName={setname} title="card1,">
<h1>sir your name is {name}</h1>
</Card>
<Card  name={name} newName={setname} title="card2">
<h1>sir your name is {name}</h1>
</Card>
   </div>
  )
}

export default App
