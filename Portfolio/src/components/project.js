import React from 'react'
import styles from "../project.css"

function project(props) {
  // Component to render a project item

  return (
    <div className='project_item_div'>
      {/* Display the project name */}
      <p className='project_heading'>{props.name}</p>

      {/* Link the project image to the provided URL */}
      <a href={props.link}>
        {/* Display the project image */}
        <img className='project_img' width={"300px"} src={Object.values(props.img)[0]}/>
      </a>

      {/* Link the project description to the provided GitHub URL */}
      <a className='a' href={props.github}>
        {/* Display the project description */}
        {props.desc}
      </a>
    </div>
  )
}

export default project;
