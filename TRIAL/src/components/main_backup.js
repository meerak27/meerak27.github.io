import React, { useRef, useState } from 'react';
import { data } from "../Data"

function Main() {

  const [btn1, setbtn1] = useState(true)
  const [btn2, setbtn2] = useState(false)
  const [btn3, setbtn3] = useState(false)
  const [btn4, setbtn4] = useState(false)

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  function handleHover(event) {
    if(btn1){
      const hoveredSpan = event.target;
      console.log(hoveredSpan)
      hoveredSpan.textContent = `${hoveredSpan.textContent + hoveredSpan.textContent }`
    }else if(btn2){
      const hoveredSpan = event.target;
      hoveredSpan.textContent = '❤️'
    }else if(btn3){
      const hoveredSpan = event.target;
    hoveredSpan.textContent = '💀'
    }else if(btn4){
      const hoveredSpan = event.target;
    hoveredSpan.textContent = '🚀'
    }
    
  }

  const handleButtonClick = (buttonNumber) => {
    switch(buttonNumber) {
      case 1:
        setbtn1(true)
        setbtn2(false)
        setbtn3(false)
        setbtn4(false)
        break;
      case 2:
        setbtn1(false)
        setbtn2(true)
        setbtn3(false)
        setbtn4(false)
        break;
      case 3:
        setbtn1(false)
        setbtn2(false)
        setbtn3(true)
        setbtn4(false)
        break;
      case 4:
        setbtn1(false)
        setbtn2(false)
        setbtn3(false)
        setbtn4(true)
        break;
      case 5:
        section2Ref.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
        break;
      default:
        break;
    }
  };


  return (
    <>
      <section
        ref={section1Ref}
        className='container'
      >
        <div className='btn'>
          <button onClick={() => handleButtonClick(1)}>①</button>
          <button onClick={() => handleButtonClick(2)}>②</button>
          <button onClick={() => handleButtonClick(3)}>③</button>
          <button onClick={() => handleButtonClick(4)}>④</button>
          <button onClick={() => handleButtonClick(5)}>↓</button>
        </div>

          

<div className='text' style={{display:'block'}}>

{data.map((element, stringIndex) => {
  const chars = element.split('');

  return chars.map((char, charIndex) => (
    <span
      key={`${stringIndex}-${charIndex}`}
      className="heart-span"
      onMouseOver={handleHover}
    >
      {char}
    </span>
  )).concat(
    <h1 key={`_${stringIndex}`}></h1>
  );
})}
</div>

    
  </section>
  <section
    ref={section2Ref}
    style={{
      height: 'calc(100vh - 100px)',
      width: '100vw',
      backgroundColor: '#e0e0e0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div>
      <h1>Section 2</h1>
    </div>
  </section>
</>
  )}
  
  export default Main