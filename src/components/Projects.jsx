import React from 'react'
import img22 from "./image/21.jpg";
import img23 from "./image/22.jpg";
import img24 from "./image/23.png";
function Projects() {
    const projectData = [
        {
          title: "On-Grid Solar",
          img: img22,
          description: "READ MORE",
        },
        {
          title: "Off-Grid Solar",
          img: img23,
          description: "READ MORE",
        },
        {
          title: "Gov-Projects",
          img: img24,
          description: "READ MORE",
        },
      ];
      
      return (
        <div className="projects-container">
          <h2>
            Our <span className="highlight">Projects</span>
          </h2>
          <div className="projects-grid">
            {projectData.map((project, index) => (
              <div className="project-card" key={index}>
                <img src={project.img} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
     
    
  )
}

export default Projects
