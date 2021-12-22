import ProjectMenu from "./ProjectMenu";
import { useState } from "react";

const ButtonMenu = (props) => {
  const [showProjectMenu, setShowProjectMenu] = useState(false);
  let projectText = showProjectMenu ? "Hide Projects" : "Show Projects";

  return (
    <div className="text-center" style={{ marginTop: "20px" }}>
      <button
        className="button"
        type="button"
        onClick={() => setShowProjectMenu(!showProjectMenu)}
      >
        {projectText}
      </button>
      <button className="button" type="button" onClick={props.resumeButton}>
        {props.resumeText}
      </button>
      {showProjectMenu && <ProjectMenu isActive={showProjectMenu} />}
    </div>
  );
};

export default ButtonMenu;
