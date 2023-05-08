import React, { useRef, useState } from "react";
import pic1 from "../images/1.webp"
import pic2003 from "../images/2003.png"
import pic2014 from "../images/2014.jpg"
import pic2020 from "../images/2020.jpg"
import pic2022 from "../images/2022.jpg"
import pic2021 from "../images/2021.jpg"
import styles from "../timeline.css"

export default function Timeline() {

  const [date19, setdate19] = useState(true)
  const [date20, setdate20] = useState(false)
  const [date21, setdate21] = useState(false)
  const [date22, setdate22] = useState(false)
  const [date23, setdate23] = useState(false)
  const [date24, setdate24] = useState(false)

  return (
    <>
<h1 id="hadi" className='heading'>Timeline</h1>
      <div id="timeline">
  <ul id="dates">
    <li>
      <a id="_2019" onClick={()=>{document.getElementById("_2019").classList.add("selected")
      setdate19(true)
      setdate20(false)
      setdate21(false)
      setdate22(false)
      setdate23(false)
      setdate24(false)
    document.getElementById("_2020").classList.remove("selected")
    document.getElementById("_2021").classList.remove("selected")
    document.getElementById("_2024").classList.remove("selected")
    document.getElementById("_2022").classList.remove("selected")
    document.getElementById("_2023").classList.remove("selected")}} href="#2019" className="selected">
      
        2003
      </a>
    </li>
    <li>
      <a id="_2020" onClick={()=>{document.getElementById("_2020").classList.add("selected")
      setdate19(false)
      setdate20(true)
      setdate21(false)
      setdate22(false)
      setdate23(false)
      setdate24(false)
    document.getElementById("_2019").classList.remove("selected")
    document.getElementById("_2024").classList.remove("selected")
    document.getElementById("_2021").classList.remove("selected")
    document.getElementById("_2022").classList.remove("selected")
    document.getElementById("_2023").classList.remove("selected")}} href="#2020" className="waleed">2012</a>
    </li>
    <li>
      <a id="_2021" onClick={()=>{document.getElementById("_2021").classList.add("selected")
      setdate19(false)
      setdate20(false)
      setdate21(true)
      setdate22(false)
      setdate23(false)
      setdate24(false)
    document.getElementById("_2019").classList.remove("selected")
    document.getElementById("_2024").classList.remove("selected")
    document.getElementById("_2020").classList.remove("selected")
    document.getElementById("_2022").classList.remove("selected")
    document.getElementById("_2023").classList.remove("selected")}} href="#2021" className="waleed">2014</a>
    </li>
    <li>
      <a id="_2022" onClick={()=>{document.getElementById("_2022").classList.add("selected")
      setdate19(false)
      setdate20(false)
      setdate21(false)
      setdate22(true)
      setdate23(false)
      setdate24(false)
    document.getElementById("_2019").classList.remove("selected")
    document.getElementById("_2020").classList.remove("selected")
    document.getElementById("_2024").classList.remove("selected")
    document.getElementById("_2021").classList.remove("selected")
    document.getElementById("_2023").classList.remove("selected")}}  href="#2022" className="waleed">2020</a>
    </li>
    <li>
      <a id="_2023" onClick={()=>{document.getElementById("_2023").classList.add("selected")
      setdate19(false)
      setdate20(false)
      setdate21(false)
      setdate22(false)
      setdate23(true)
      setdate24(false)
    document.getElementById("_2019").classList.remove("selected")
    document.getElementById("_2024").classList.remove("selected")
    document.getElementById("_2020").classList.remove("selected")
    document.getElementById("_2021").classList.remove("selected")
    document.getElementById("_2022").classList.remove("selected")}} href="#2023" className="waleed">2021</a>
    </li>
    <li>
      <a id="_2024" onClick={()=>{document.getElementById("_2024").classList.add("selected")
      setdate19(false)
      setdate20(false)
      setdate21(false)
      setdate22(false)
      setdate23(false)
      setdate24(true)
    document.getElementById("_2019").classList.remove("selected")
    document.getElementById("_2023").classList.remove("selected")
    document.getElementById("_2020").classList.remove("selected")
    document.getElementById("_2021").classList.remove("selected")
    document.getElementById("_2022").classList.remove("selected")}} href="#2024" className="waleed">2022</a>
    </li>
  </ul>
  <ul style={{display: "flex",flexDirection: "column", gap: "100px"}} id="issues">
    <li style={{display : `${date19 ? "flex":"none"}`, flexDirection: "column", alignItem: "center"}} id={2019} className="selected">
      <img src={pic2003} />
      <p className="timeline_para">
      December 29, 2003, the start of it all
      </p>
    </li>
    <li style={{display : `${date20 ? "flex":"none"}`, flexDirection: "column", alignItem: "center"}} id={2020}>
      <img src={pic1} />
      <p className="timeline_para">
      My obsession with Minecraft and creating new pieces out of nothing
      </p>
    </li>
    <li style={{display : `${date21 ? "flex":"none"}`, flexDirection: "column", alignItem: "center"}} id={2021}>
      <img src={pic2014} />
      <p className="timeline_para">
      The year I knew NYUAD was the institution I wanted to attend after they opened the art gallery.
      </p>
    </li>
    <li style={{display : `${date22 ? "flex":"none"}`, flexDirection: "column", alignItem: "center"}} id={2022}>
      <img src={pic2020} />
      <p className="timeline_para">
      Applying to NYUAD ED2
      </p>
    </li>
    <li style={{display : `${date23 ? "flex":"none"}`, flexDirection: "column", alignItem: "center"}} id={2023}>
      <img src={pic2021} />
      <p className="timeline_para">
      Getting my acceptance and researching majors.
      </p>
    </li>
    <li style={{display : `${date24 ? "flex":"none"}`, flexDirection: "column", alignItem: "center"}} id={2024}>
      <img src={pic2022} />
      <p className="timeline_para">
      Discovering the love I have for IM and deciding it will be my primary major.
      </p>
    </li>
  </ul>
  <a href="#" id="next">
    +
  </a>
  <a href="#" id="prev">
    -
  </a>
</div>

    </>
  );
}
