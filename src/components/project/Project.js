import "./project.css";
import React from "react";
import projectList from "../../projectList";


const Project = () => {
    return (
        <div className="portfolio-wrapper">
            <div className="container-fluid" id="portfolio">
                
                        <h1 className="text-uppercase text-center"> My Portfolio</h1>
                        <div className="row">
                        <div className="col-sm">
                        <ul className="project-list">
                    
                            {projectList.map((project) => (
                                <ul className="project-id" key={project.id}>
                                    <h3 className="project-name"> {project.name}</h3>
                                    <img className="portfolio-image" src={project.image} alt="" />
                                    <p className="project-description">{project.description}</p>
                                    <div>
                                        <a href={project.deploy}><button>View Website</button></a><a href={project.github}><button>View GitHub</button></a>
                                    </div>
                                </ul>
                            ))}
                    
                        </ul>
                    
                        </div>
                        </div>
            </div>
        </div>
    )
}

export default Project
