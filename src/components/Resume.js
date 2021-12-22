import ResumeDownload from "../assets/resume.pdf";
import ResumeImage from "../assets/resume.png";

const Resume = () => {
  return (
    <div className="container col-md-6 centered">
      <a
        className="big-link"
        href={ResumeDownload}
        target="_blank"
        rel="noreferrer"
      >
        Download
      </a>
      <img className="centered-image" src={ResumeImage} alt="Resume" />
    </div>
  );
};

export default Resume;
