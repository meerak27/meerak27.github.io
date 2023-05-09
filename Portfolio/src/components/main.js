import React, { useEffect, useRef, useState } from "react";
import { data } from "../Data";
import heart from '../images/heart.png'
import Projects from "./projects";
import Timeline from "./timeline"
import { hover } from "@testing-library/user-event/dist/hover";

function Main() {
  // Button states
  const [btn1, setbtn1] = useState(true);
  const [btn2, setbtn2] = useState(false);
  const [btn3, setbtn3] = useState(false);
  const [btn4, setbtn4] = useState(false);

  // Content state
  const [content, setContent] = useState([]);

  // First render state
  const [first, setfirst] = useState(true);

  // Custom pink shades
  const pinkShades = [
    "rgba(255,192,203,1)",
    "rgba(255,182,193,1)",
    "rgba(255,105,180,1)",
    "rgba(255,20,147,1)",
    "rgba(219,112,147,1)",
    "rgba(199,21,133,1)",
    "rgba(218,112,214,1)",
    "rgba(216,191,216,1)",
    "rgba(221,160,221,1)",
    "rgba(238,130,238,1)",
  ];

  // Refs for sections
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  useEffect(() => {
    handleData(data);
  }, [first]);

  // Handle data and generate content
  const handleData = (data) => {
    const newData = data.map((element, stringIndex) => {
      const chars = element.split("");
      return chars
        .map((char, charIndex) => (
          <span
            key={`${stringIndex}-${charIndex}`}
            className="heart-span"
            onMouseOver={handleHover}
            onMouseLeave={leave}
          >
            {char}
          </span>
        ))
        .concat(<h1 key={`_${stringIndex}`}></h1>);
    });
    setContent(newData);
  };

  // Event handler for mouse leave
  function leave(e) {
    if (btn3) {
      const hoveredSpan = e.target;
      hoveredSpan.style.animation = "press 0.5s";
    }
  }

  // Event handler for mouse hover
  function handleHover(event) {
    if (btn4) {
      const hoveredSpan = event.target;
      const textContent = hoveredSpan.innerText;
      if (textContent.length > 1) {
        setA(textContent);
        hoveredSpan.textContent = `${hoveredSpan.textContent + a}`;
      } else {
        hoveredSpan.textContent = `${hoveredSpan.textContent + hoveredSpan.textContent}`;
      }
    } else if (btn2) {
      const hoveredSpan = event.target;
      hoveredSpan.innerHTML = `<img width="40px" src=${heart}>`;
    } else if (btn3) {
      const hoveredSpan = event.target;
      hoveredSpan.style.animation = "press infinite 0.5s";
      hoveredSpan.style = `color : ${pinkShades[Math.floor(Math.random() * pinkShades.length)]}`;
} else if (btn1) {
  const hoveredSpan = event.target;
  const circleRadius = 200; // define the radius of the circle here

  // get the position of the mouse relative to the element
  const mouseX = event.pageX - hoveredSpan.offsetLeft - hoveredSpan.offsetWidth / 2;
  const mouseY = event.pageY - hoveredSpan.offsetTop - hoveredSpan.offsetHeight / 2;

  // calculate the distance between the mouse and the center of the element ( 255, 192, 203, 0.5 )
  const distance = Math.sqrt(mouseX ** 2 + mouseY ** 2);
  if (distance <= circleRadius) {
    hoveredSpan.style = `color : ${pinkShades[Math.floor(Math.random() * pinkShades.length)]}`;
  }
}

// Handle button click
const handleButtonClick = (buttonNumber) => {
  setContent([]);
  setfirst(!first);
  switch (buttonNumber) {
    case 1:
      setbtn1(true);
      setbtn2(false);
      setbtn3(false);
      setbtn4(false);
      break;
    case 2:
      setbtn1(false);
      setbtn2(true);
      setbtn3(false);
      setbtn4(false);
      break;
    case 3:
      setbtn1(false);
      setbtn2(false);
      setbtn3(true);
      setbtn4(false);
      break;
    case 4:
      console.log("press");
      setbtn1(false);
      setbtn2(false);
      setbtn3(false);
      setbtn4(true);
      break;
    case 5:
      section2Ref.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
      break;
    default:
      break;
  }
};

return (
  <div id="home" className="top_layout">
    <section ref={section1Ref} className="child container">
      <div className="btn">
        <button onClick={() => handleButtonClick(1)}><p className="btn_p">1</p></button>
        <button onClick={() => handleButtonClick(2)}><p className="btn_p">2</p></button>
        <button onClick={() => handleButtonClick(3)}><p className="btn_p">3</p></button>
        <button onClick={() => handleButtonClick(4)}><p className="btn_p">4</p></button>
        {/* <button onClick={() => handleButtonClick(5)}>↓</button> */}
      </div>

      <div id="text" className="text" style={{ display: "block" }}>
        {content}
        <img style={{ display: "none" }} src={heart} />
      </div>
    </section>
    <div id="circle"></div>
    <section
      ref={section2Ref}
      className="child"
      style={{
        padding: "40px"
      }}
      id="project"
    >
      <Projects />
    </section>

    <section
      style={{
        display: "flex",
        flexDirection: "column"
      }}
      className="child"
      id="timeline1"
>
<div className="section2">
<Timeline />
</div>
</section>

  </div>
);
}
export default Main;

