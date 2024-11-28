import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Grid from "./Components/grid/grid";
import Scroll from "./Components/scroll/scroll";
import "./App.css";

const App = () => {
  return (
    <div>
       <Navbar/>
       <Grid/>
       
       <div class ="bro"> 

           Bearbricks New Arrivals
           <div style={{ marginBottom: '20px' }}></div>
        
         <Scroll/></div>
    </div>
  )
}

export default App