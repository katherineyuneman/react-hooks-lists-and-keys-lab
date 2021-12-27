import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log("technologies:",technologies)
  let techElement = technologies.map(tech => {
    return <span key={tech}>{tech}</span>
  })
  debugger;
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techElement}
      </div>
    </div>
  );
}

export default ProjectItem;
