import ProfilePicture from "../assets/profile.jpg";

const Header = () => {
  return (
    <div className="text-center">
      <img className="profile-picture" src={ProfilePicture} alt="profile" />
      <h1>Benjamin Bernstein</h1>
      <a
        className="big-link"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/benjamin-bernstein-188711166/"
      >
        LinkedIn
      </a>
      &bull;
      <a
        className="big-link"
        href="https://www.github.com/dolphinos7/"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    </div>
  );
};

export default Header;
