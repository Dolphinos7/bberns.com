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

  let buttonText = showResume ? "Hide Resume" : "Show Resume";

  return (
      <div className="text">
        <Header />
        <ButtonMenu resumeButton={resumeDisplay} buttonText={buttonText} />
        {showResume && <Resume />}
      </div>
  );
};

export default Home;
