import { useState } from 'react'
import LogOut from './component/loggedOut.jsx'
import LogIn from './component/loggedIn.jsx'
import './App.css'


function App() {
  const[login,setlogin]=useState(false);
// using if -else
// if(login){
//  return <LogOut/>
// }
// else{
//   return <LogIn/>
// }

// using ternary operator

  // return(
    
  //     login?<LogOut/>:<LogIn/>
   
  // )
  if(!login){
    return <LogIn/>
  }
return(
  <LogOut/>
)
}

export default App
