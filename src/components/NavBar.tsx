import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

//Add more css to navbar links.

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <a className="navbar-links" href="#about-me">
          About me
        </a>
        <a className="navbar-links" href="#work-experience">
          Work Experience
        </a>
        <a className="navbar-links" href="#">
          Projects
        </a>
        <a className="navbar-links" href="#">
          Contact
        </a>
        <Link className="navbar-links" to={"/rejsekort"}>
          rejsekort app
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
