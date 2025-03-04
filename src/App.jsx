import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Grid from "./Components/grid/grid";
import Scroll from "./Components/scroll/scroll";
import Disc from "./Components/disc/disc";
import Hero from './Components/hero/hero';
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
         <div class ="story"> 

        Discount items

        </div>
         <div class ="cool"/> 
         <Disc/>
         <div><Hero/></div>
    </div>
    
  )
}

export default App