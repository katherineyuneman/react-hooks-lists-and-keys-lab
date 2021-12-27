import React from "react";
// import user from "../data/user";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log("projects:", projects);
  const oneProject = projects.map(project => {
    return <ProjectItem
    key={project.id}
    name={project.name}
    about={project.about}
    technologies={project.technologies}
    />
  })
  // debugger;
  console.log({oneProject})
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {oneProject}
      </div>
    </div>
  );
}

export default ProjectList;
