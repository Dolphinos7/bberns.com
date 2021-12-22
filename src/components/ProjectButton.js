const ProjectButton = ({ project }) => {
  return (
    <>
      <div className="project-button" style={{ position: "relative" }}>
        {/* <a href={project.link} target="_blank" rel="noreferrer">
          <span className="div-link"></span>
        </a> */}
        <h4>{project.name}</h4>
        <h6>{project.description}</h6>
        <form action={project.route}>
          <button type="submit" className="project-sub-button">
            About
          </button>
          <button
            type="button"
            className="project-sub-button"
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.link, "_blank");
            }}
          >
            Visit
          </button>
        </form>
      </div>
      <br />
    </>
  );
};

export default ProjectButton;
