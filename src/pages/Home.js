import Header from "../components/Header";
import ButtonMenu from "../components/ButtonMenu";
import Resume from "../components/Resume";
import { useState } from "react";

const Home = () => {
  const [showResume, setShowResume] = useState(false);

  const resumeDisplay = () => {
    if (showResume) {
      setShowResume(false);
    } else {
      setShowResume(true);
    }
  };

  let resumeText = showResume ? "Hide Resume" : "Show Resume";

  return (
    <div className="container col-12 text">
      <Header />
      <ButtonMenu resumeButton={resumeDisplay} resumeText={resumeText} />
      {showResume && <Resume />}
    </div>
  );
};

export default Home;
