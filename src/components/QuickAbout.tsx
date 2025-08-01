import "../App.css";
import profilePic from "../assets/profil-pic.png";

const QuickAbout = () => {
  return (
    <>
      <div className="polyBackground" style={{ border: "1px solid blue" }}>
        <img
          src={profilePic}
          alt="profile"
          height={"200rem"}
          style={{ padding: "0.5rem" }}
        ></img>
        <h2 className="h2" style={{ color: "white" }}>
          Lukas Corlin Østergaard
        </h2>
        <h6 style={{ color: "white" }}>Student Software Developer</h6>
        <p style={{ color: "white" }}>contact logos (linkedIn, GitHub)</p>
        <div
          className="double-element"
          style={{ border: "1px solid red", justifyContent: "center" }}
        >
          <div style={{ border: "1px solid red", padding: "0.25rem" }}>
            <button className="button-81" role="button">
              Download CV
            </button>
          </div>
          <div style={{ border: "1px solid red", padding: "0.25rem" }}>
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
