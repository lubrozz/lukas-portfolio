import React from "react";
import "../App.css";

const WorkExperience = () => {
  return (
    <>
      <section id="work-experience">
        <div>
          <h3>Work Experience</h3>
          <br />
          <div className="left-align" id="Abacus-work">
            <div>
              <div className="inline-display">
                <h4>Abacus Medicine</h4>
              </div>
              <div className="inline-display badge-date">
                May 2025 - Present
              </div>
            </div>
            <h6>Student Software Developer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium rerum quae nam, nulla suscipit, architecto tempore
              obcaecati aut modi esse sed minima aliquid cupiditate numquam. Sit
              blanditiis nesciunt suscipit ipsa!
            </p>
          </div>
          <br />
          <div className="left-align" id="Nestle-work">
            <div>
              <div className="inline-display">
                <h4>Nestlé Nordics</h4>
              </div>
              <div className="inline-display badge-date">
                January 2023 - April 2025
              </div>
            </div>
            <h6>Student Worker - Nordic IT</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium rerum quae nam, nulla suscipit, architecto tempore
              obcaecati aut modi esse sed minima aliquid cupiditate numquam. Sit
              blanditiis nesciunt suscipit ipsa!
            </p>
            <br />
            <div>
              <div className="inline-display">
                <h6>IT Analytics and Automation</h6>
              </div>
              <div className="inline-display">
                <div
                  className="inline-display badge-special"
                  style={{ marginRight: "4px" }}
                >
                  Full-time
                </div>
                <div className="inline-display badge-date">
                  February 2024 - July 2024
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium rerum quae nam, nulla suscipit, architecto tempore
              obcaecati aut modi esse sed minima aliquid cupiditate numquam. Sit
              blanditiis nesciunt suscipit ipsa!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkExperience;
