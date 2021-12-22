import ProjectMenu from "./ProjectMenu";
import { useState } from "react";

const ButtonMenu = (props) => {
  const [showProjectMenu, setShowProjectMenu] = useState(false);
  let projectText = showProjectMenu ? "Hide Projects" : "Show Projects";

  return (
    <div className="row" style={{ marginTop: "20px" }}>
      <div className="col" align="right">
        <button
          className="button"
          type="button"
          onClick={() => setShowProjectMenu(!showProjectMenu)}
        >
          {projectText}
        </button>
      </div>
      <div className="col" align="left">
        <button className="button" type="button" onClick={props.resumeButton}>
          {props.resumeText}
        </button>
      </div>
      {showProjectMenu && <ProjectMenu isActive={showProjectMenu} />}
    </div>
  );
};

export default ButtonMenu;
