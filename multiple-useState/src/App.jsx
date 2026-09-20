
import { useState } from 'react'
import './App.css'
import { sculptureList } from './component/data.jsx'

export default function Gallery(){
const[index,setIndex]=useState(0);

const[Visibility,setVisibility]=useState(false);
let sculpture=sculptureList[index];
return(

<div>
  <button onClick={()=>{
    setIndex(index+1)
  }}>click kar chutiye</button>
<h3>name of person:{sculpture.name}</h3>
<img src={sculpture.url} alt={sculpture.alt} />
<p>made by:{sculpture.artist}</p>
{!Visibility?(<button onClick={()=>{
  setVisibility(!Visibility);
}}>show description</button>):(<button onClick={()=>{
  setVisibility(!Visibility);
}}>hide description</button>)}
<br />
{Visibility ? sculpture.description : ""}
</div>


)


}