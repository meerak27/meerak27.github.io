import React from 'react'
import styles from '../project.css'
import Project from "./project"
import { projects_data } from "../Data"

function projects() {
  // Component to render a list of projects

  return (
    <div className='projects_div'>
      {/* Display the heading for the projects section */}
      <h1 style={{margin: "40px 0px"}} className='heading'>My Projects</h1>

      <div className='projects_table'>
        {/* Render each project item using the Project component */}
        {projects_data.map(pro => {
          return <Project key={pro.name + pro.link} name={pro.name} link={pro.link} github={pro.github} desc={pro.description} img={pro.img} />
        })}
      </div>
    </div>
  )
}

export default projects;
