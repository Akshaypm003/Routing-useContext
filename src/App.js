import React from "react";
// import Counter from "./Counter";
import { useState } from "react";
import axios from "axios";

function App() {
  const [state,setState] = useState([])
   
  return (
    <div>
      <button onClick={()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>setState(res.data))
      }}>click</button>
      { state.map((obj,i)=>{
          return(
            <div>
            <h3><span>{i+1}. </span>{obj.title}</h3>
            <p>{obj.body}</p>
            </div>
          )
        })}
    </div>
  );
}

export default App;

