// import React, {useEffect, useState} from 'react'

// function Counter() {
//     const [count,setCount]=useState(0);
//     const [count1,setCount1]=useState(0);

//     useEffect(()=>{
//         console.log('mounted...'+count);
//         return (()=>{
//             console.log('unmounted...'+count)
//         })
      
//     },[count])
//   return (
//     <div> 
//         <button onClick={()=>setCount(count+1)}>click</button>
//         <h3>I'm component : {count}</h3>

//         <button onClick={()=>setCount1(count1+1)}>click</button>
//         <h3>I'm component1 : {count1}</h3>
//     </div>
//   )
// }

// export default Counter