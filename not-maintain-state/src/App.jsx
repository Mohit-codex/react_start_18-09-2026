import { sculptureList } from './component/Data.jsx';
import { useState } from 'react';
export default function Gallery() {
  index=0;
 const [index,setIndex]=useState(0);

  // function handleClick() {
  //  setIndex(index+1);
  // }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={()=>{
        setIndex(index+1)
      }}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}

