import React, { useState } from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Stack,
    Button,
    Menu,
    MenuItem
} from '@mui/material'

import CastForEducationIcon from '@mui/icons-material/CastForEducation';


function Navbar2() {
   
  return (
    <>
    
   <AppBar position='static' color='inherit'>

     <Toolbar>



<Stack direction = 'row' spacing = {2}>

    <Button color = 'primary'> <p>
  <a href="http://localhost:3000/home">Home</a>
</p></Button>

    {/* <Button color = 'inherit'><p>
  <a href="http://localhost:3000/pages">Pages</a>
</p></Button> */}

    <Button color = 'inherit'><p>
  <a href="http://localhost:3000/courses">Courses</a>
</p></Button>

    <Button color = 'inherit'><p>
  <a href="http://localhost:3000/aboutus">About Us</a>
</p></Button>

    <Button color = 'inherit'><p>
  <a href="http://localhost:3000/certificates">Certificates</a>
</p></Button>
   
    </Stack>
    
    
    
    </Toolbar>   
    
      </AppBar>
       
      </>
      
  
   
  )
}

export default Navbar2