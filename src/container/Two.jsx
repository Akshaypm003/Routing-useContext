import{ useContext } from 'react'
import { AppContext } from '../Context'


function Two() {

  const {data:passed} = useContext(AppContext)
  return (
    <div style={{height:'200px',width:'300px',backgroundColor:'green'}}>
        <h1>page two {passed}</h1>
        </div>
  )
}

export default Two