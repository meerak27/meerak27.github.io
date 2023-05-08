import React from 'react'
import styles from '../project.css'
import Project from "./project"
import {projects_data} from "../Data"

function projects() {
  return (
    <div className='projects_div'>
        <h1 style={{margin: "40px 0px"}} className='heading'>My Projects</h1>
        <div className='projects_table'>
            {
                projects_data.map(pro =>{
                    return <Project key={pro.name+pro.link} name={pro.name} link={pro.link} github={pro.github} desc={pro.description} img={pro.img}/>
                })
            }
        </div>
    </div>
  )
}

export default projects