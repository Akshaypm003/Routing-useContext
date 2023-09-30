import React, { Fragment, useState } from "react";
import {Route, Link, Routes, useNavigate} from 'react-router-dom'
import Profile from "./container/Profile";
import About from "./container/About";
import { AppContext } from "./Context";


function App() {

  const navigate= useNavigate()
  const [first, setfirst] = useState(30)
 
  return (
      <Fragment>
        
        <Link to='/About'>About page</Link> <br />
        <Link to='/Profile'>Profile page</Link> 

        <button onClick={()=>navigate('/About')}> About</button>
        <button onClick={()=>navigate('/Profile')}>Profile</button>

        <AppContext.Provider value={{data:first}}>   
          <Routes>
            <Route Component={About} path="/About"></Route>
            <Route Component={Profile} path="/Profile"></Route> 
          </Routes>
        </AppContext.Provider>
        
      </Fragment>
  );
}

export default App;

