import React, { useRef, useState } from 'react';
import styles from './App.css'
import Main from './components/main';
import Nav from './components/nav'

function App() {
  return(
    <div className='layout'>
    <div id='nav_div'>
      <Nav/>
    </div>
    <div className='layout2'>
      <Main/>
    </div>
    </div>
  )
}
  
  export default App