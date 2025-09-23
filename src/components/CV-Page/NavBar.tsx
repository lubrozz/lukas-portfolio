import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

//Add more css to navbar links.

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <HashLink className="navbar-links" smooth to="/#work-experience">
          Work Experience
        </HashLink>
        <Link className="navbar-links" to={"/Projects"}>
          Projects
        </Link>
        <Link className="navbar-links" to={"/rejsekort"}>
          rejsekort app
        </Link>
        <Link className="navbar-links" to={"/FitnessPage"}>
          Fitness Tracker
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
