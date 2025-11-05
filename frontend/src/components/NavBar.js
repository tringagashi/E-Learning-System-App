import React, { useState } from 'react'


import NavBar1 from './NavBar1';
import Navbar2 from './Navbar2';
import HomeImage from './HomeImage';
import HomePage from './HomePage';




function Navbar() {
  const myStyle = {
    backgroundColor: 'lightblue',
   
  };
  
  return (

    <>
     <div style={myStyle}>
      
    

      <NavBar1 />
      <Navbar2 />
      <HomeImage />
      <HomePage />
      
 
     
     
    
      </div>
      </>
      
  
   
  )
}

export default Navbar
