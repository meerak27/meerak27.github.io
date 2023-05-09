import React, { useRef, useState } from 'react';
import styles from './App.css';

import Main from './components/main';
import Nav from './components/nav';

function App() {
  return (
    <div className='layout'>
      {/* Top-level layout */}
      <div id='nav_div'>
        {/* Navigation section */}
        <Nav />
      </div>
      <div className='layout2'>
        {/* Main content */}
        <Main />
      </div>
    </div>
  );
}

export default App;
