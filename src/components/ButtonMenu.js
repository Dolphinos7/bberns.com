import ProjectMenu from "./ProjectMenu";
import { useState } from "react";

const ButtonMenu = (props) => {
  const [showProjectMenu, setShowProjectMenu] = useState(false);

  return (
    <div className="container col-md-6 centered">
      <form action="https://github.com/dolphinos7" method="get" target="_blank">
        <button className="button" style={{ marginTop: "20px" }} type="submit">
          Github
        </button>
        <button
          className="button"
          type="button"
          onClick={() => setShowProjectMenu(!showProjectMenu)}
        >
          Projects Menu
        </button>
        <button className="button" type="button" onClick={props.resumeButton}>
          {props.buttonText}
        </button>
      </form>
      {showProjectMenu && <ProjectMenu isActive={showProjectMenu} />}
    </div>
  );
};

export default ButtonMenu;
