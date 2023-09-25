import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [show,setShow]=useState(false)
  return (
    <div>
      <h1 onClick={()=>setShow(!show)}>Show/Hide</h1>
      {show && <Counter/> }
    </div>
  );
}

export default App;

