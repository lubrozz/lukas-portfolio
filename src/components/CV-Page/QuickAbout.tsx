import "../App.css";
import profilePic from "../assets/profil-pic.png";
import { SocialIcon } from "react-social-icons";

const QuickAbout = () => {
  return (
    <>
      <div className="polyBackground">
        <img
          src={profilePic}
          alt="profile"
          height={"200rem"}
          style={{ padding: "0.5rem" }}
        ></img>
        <h2 style={{ color: "white" }}>Lukas Corlin Østergaard</h2>
        <h6 style={{ color: "white" }}>Student Software Developer</h6>
        <div>
          <SocialIcon url="https://www.linkedin.com/in/lukas-corlin-oestergaard/" />
          <SocialIcon url="https://github.com/lubrozz/" />
        </div>
        <div className="double-element" style={{ justifyContent: "center" }}>
          <div style={{ padding: "0.25rem" }}>
            <button className="button-81" role="button">
              Download CV
            </button>
          </div>
          <div style={{ padding: "0.25rem" }}>
            <button className="button-81" role="button">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickAbout;
