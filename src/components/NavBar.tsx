import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

//Add more css to navbar links.

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <a className="navbar-links" href="#about-me">
          About me
        </a>
        <HashLink
          className="navbar-links"
          smooth
          to="/lukas-portfolio#work-experience"
        >
          Work Experience
        </HashLink>
        <Link className="navbar-links" to={"/Projects"}>
          Projects
        </Link>
        <a className="navbar-links" href="Contact">
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
