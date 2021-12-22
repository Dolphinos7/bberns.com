import ResumeImage from "../assets/resume.png";

const Resume = () => {
  return (
    <div className="container col-md-6 centered">
      <a
        className="big-link"
        href={
          "https://github.com/Dolphinos7/bberns.com/raw/master/src/assets/resume.pdf"
        }
        download={"Benjamin_Bernstein_Resume"}
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
