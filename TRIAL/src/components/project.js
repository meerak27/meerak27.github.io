import React from 'react'
import styles from "../project.css"

function project(props) {
  return (
    <div className='project_item_div'>
        <p className='project_heading'>{props.name}</p>
        <a href={props.link}><img className='project_img' width={"300px"} src={Object.values(props.img)[0]}/></a>
        <a className='a' href={props.github}>{props.desc}</a>
    </div>
  )
}

export default project