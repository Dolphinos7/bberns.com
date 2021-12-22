// import JavaEEPNG from "../assets/javaee.png";
import ProjectButton from "./ProjectButton";
// import { useState } from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

const ProjectMenu = () => {
  //   const [projects, setProjects] = useState([
  //     {
  //       id: 1,
  //       name: "Cloud Computing",
  //       description: "Final Project from VT Cloud Computing Class",
  //       link: "http://23.22.218.255:8080/Event-Organizer",
  //     },
  //     {
  //       id: 2,
  //       name: "Ryde Safe",
  //       description: "VT Hacks 2020 Project",
  //       link: "https://saferyde.tech",
  //     },
  //   ]);

  let projects = [
    {
      id: 1,
      name: "Cloud Computing",
      description: "Final Project from VT Cloud Computing Class",
      link: "http://23.22.218.255:8080/Event-Organizer",
      route: "/CloudComputing",
    },
    {
      id: 2,
      name: "Ryde Safe",
      description: "VT Hacks 2020 Project",
      link: "https://saferyde.tech",
      route: "/RydeSafe",
    },
  ];
  return (
    <div className="text-center">
      {projects.map((aProject) => {
        return <ProjectButton key={aProject.id} project={aProject} />;
      })}
    </div>
  );
};

export default ProjectMenu;
