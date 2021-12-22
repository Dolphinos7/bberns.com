import LinkButton from "../components/LinkButton";
import Header from "../components/Header";
import TechStack from "../assets/techstack.png";
const CloudComputing = () => {
  return (
    <div className="text container centered background">
      <Header />
      <a
        href="http://23.22.218.255:8080/Event-Organizer/"
        target="_blank"
        rel="noreferrer"
        className="text-highlight h1"
      >
        Cloud Computing Project
      </a>
      &nbsp;
      <div className="col-12 my-container" align="center">
        <h1>Overview</h1>
        <p style={{ textAlign: "left", marginLeft: "10px" }}>
          The final project of the cloud computing course at Virginia Tech is to
          work as a team and create an application of your choice. Our team
          decided to go with an event organizer application that allows users to
          create events, browse a list of public events, "purchase" tickets to
          an event, and view the information about the event they purchased a
          ticket for.
        </p>
      </div>
      <div className="col-12 my-container" align="center">
        <h1>Tech Stack</h1>
        <p style={{ textAlign: "left", marginLeft: "10px" }}>
          The event organizer, as well as various other projects for the class
          were all built using:
          <ul style={{ listStylePosition: "inside", textAlign: "left" }}>
            <li>JavaEE</li>
            <li>Wildfly</li>
            <li>Prmefaces</li>
            <li>AWS EC2</li>
          </ul>
          <img className="centered-image" src={TechStack} alt="tech stack" />
        </p>
      </div>
      <div className="col-12 my-container" align="center">
        <h1>APIs</h1>
        <p style={{ textAlign: "left", marginLeft: "10px" }}>
          Lots of google maps stuff. Will write more later
        </p>
      </div>
      <LinkButton text="Home" link="/" />
    </div>
  );
};

export default CloudComputing;
