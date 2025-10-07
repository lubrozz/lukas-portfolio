import React from "react";
import "../../App.css";

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
              Minor tasks on internal software used in-house. The tasks have
              mostly been smaller UI changes. A bigger focus has been getting me
              into the mindset of a software developer position and learning
              crucial code habits, PR and Git commands for a clean log.
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
              Supporting full-time employees in their tasks, such as automation
              and data analytics. Using <strong>Power Apps</strong> for
              digitizing workflows. Such as the workflow for a hand-back list
              that for many years had been paper only and needed to be moved
              around a lot of people every time someone left or changed their
              position in the company. <br />
              The application made it easier for HR and facilities to gather the
              company belongings that the employee needed to return. The
              application was backed by automation (
              <strong>Power Automate</strong>) for sending out emails to the
              employee, their manager, and others involved in the flow.
              <br />
              The tasks I took on during my brief period as a full-time employee
              continued. These responsibilities can be seen below.
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
              As I finished my bachelor's degree in January of 2024 I had half a
              year before I could continue on my master's degree. Nestlé gave me
              the opportunity of becoming a fulltime employee until I started my
              master's. <br /> <br />
              During my full-time I took over a colleagues work as they left the
              company. This was a big task of handling all incoming data from
              retailers in the Nordics. This data was received, transformed, and
              made ready in a database for analytical use in the respective
              departments. <br />
              This process involved contact with the retailers, but was mainly
              automatic using different technologies. We used{" "}
              <strong>Microsoft Graph API</strong> to receive the emails with
              data. On a virtual machine <strong>Powershell</strong> scripts
              were used to transform the data to fit our desired database as
              some data was superficial. A <strong>MySQL</strong> database was
              setup for each retailer and using{" "}
              <strong>Azure DataFactory</strong> pipelines were created to pipe
              the transformed data into the data lakes.
              <br />
              <br />
              Another project I was in charge of was to make the student worker
              time registration easier for the student workers and HR to see the
              hours easily for each student worker each month. The flow before
              was that each student worker would send an Excel sheet to a HR
              email. The HR student worker would then have to open each one to
              see the amount of hours and type that into another system.
              <br />
              Using <strong>Power Automate</strong> I created an automation that
              took each email and read the total hours and stored it in a list
              on a Sharepoint, along with saving each file to a folder
              structure, that would create a new folder if the month or year of
              the incoming timesheets did not exists.
              <br />
              The student workers still input their hours in an Excel sheet but
              submitted it through a Microsoft forms link instead of sending an
              email. Their manager would also be sent a confirmation email. The
              Sharepoint list made it easy for HR to check the total hours for
              each student worker without having to open each file while still
              having the files for audits.
              <br />I expressed my desire for trying to code a platform for it
              instead of using Power Automate, but since there was limited time
              and I have very little knowledge at that point, it was not a
              possibility.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkExperience;
