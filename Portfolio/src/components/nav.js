import React, { useEffect, useState } from 'react'
import styles from '../nav.css'
import logo from "../images/logo.webp"
import icon from "../images/icon.png"

function Nav() {
  // State for side navigation
  const [side, setside] = useState(true);

  // State for window width
  const [width, setwidth] = useState();

  // State for mobile flag
  const [mobile, setmobile] = useState();

  useEffect(() => {
    // Update the window width
    setwidth(window.innerWidth);

    // Set the side state based on window width
    if (window.innerWidth < "940") {
      setside(true);
    } else {
      setside(false);
    }
  }, [width]);

  useEffect(() => {
    // Update the side navigation icon or content based on side state
    if (side) {
      let div = document.getElementById("open");
      div.innerHTML = `<img src=${icon}/>`;
    } else {
      let div = document.getElementById("open");
      div.innerText = "";
    }
  }, [side]);

  function close() {
    // Function to close the side navigation
    setside(true);
  }

  function check(e) {
    // Function to handle navigation item click and log the event
    console.log(e);
  }

  return (
    <div className='navbar'>
      <div id='open' onClick={() => { setside(false) }}></div>
      <div style={{ display: side ? 'none' : 'flex' }} id='navcheck' className='nav_container'>
        <div className='nav_inner'>
          <div className='back' style={{ cursor: 'pointer', display: width < 640 ? "block" : "none" }} onClick={close}>←CLOSE</div>
          <div className='top'>
            <img className='logo' style={{ cursor: "pointer", filter: "brightness(0)", WebkitFilter: "brightness(0)", opacity: "70%" }} width={"200px"} src={logo}></img>
            <div className='fancy_div'>
              <p className='word fancy'>
                <span className='letter'>M</span>
                <span className='letter'>E</span>
                <span className='letter'>E</span>
                <span className='letter'>R</span>
                <span className='letter'>A</span>
              </p>
              <p className='word fancy'>
                <span className='letter'>A</span>
                <span className='letter'>L</span>
                <span className='letter'>-</span>
                <span className='letter'>K</span>
                <span className='letter'>H</span>
                <span className='letter'>A</span>
                <span className='letter'>Z</span>
                <span className='letter'>R</span>
                <span className='letter'>A</span>
                <span className='letter'>J</span>
                <span className='letter'>I</span>
              </p>
            </div>
          </div>
          <div className='bottom'>
            <ul id='ul'>
              <li><a onClick={() => check("home")} href='#home'>Home</a></li>
              <li><a onClick={() => check("project")} href='#project'>Projects</a></li>
              <li><a onClick={() => check("timeline")} href='#hadi'>Timeline</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav;
