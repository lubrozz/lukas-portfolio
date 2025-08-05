import React, { useEffect, useState } from "react";
import "../App.css";

const AboutMe = () => {
  let dateTime = new Date();
  const birthday = new Date(1999, 2, 15);

  function getAge(date: Date) {
    const birthYear = birthday.getFullYear();
    let dateYear = date.getFullYear();

    if (date.getMonth() <= 2) {
      if (date.getDay() < 15) {
        return dateYear - birthYear - 1;
      }
    } else {
      return dateYear - birthYear;
    }
  }

  const [bDayMessage, setbDayMessage] = useState("");
  useEffect(() => {
    if (
      dateTime.getDate() === birthday.getDate() &&
      dateTime.getMonth() === birthday.getMonth()
    ) {
      setbDayMessage(". Today is my birthday! 🥳");
      document.title = "It's my birthday!";
    }
  }, [dateTime]);

  return (
    <>
      <div id="about-me">
        <div>
          <h1>About me</h1>
          <br />
          <p>
            I enjoy working with my different interests. Both in a team with
            peers to bounce ideas off on, but also independently. I enjoy
            socializing with friends both in-person, but also over a good game
            on the computer.
          </p>
        </div>
        <div className="double-element border-black">
          <div className="small-element-containers">
            <h2>Personal information</h2>
            <ul className="emoji-list">
              <li className="item-1">
                Age: {getAge(dateTime)} {bDayMessage}
              </li>
              <li className="item-2">Email: lukasglo12@gmail.com</li>
              <li className="item-3">Phone: +45 22 55 08 35</li>
              <li className="item-4">
                Address: Ved Mønten 10, 2300, København S
              </li>
              <li className="item-5">Nationality: Danish</li>
            </ul>
          </div>
          <div className="small-element-containers">
            <h2>Interests</h2>
            <p>
              I enjoy keeping up with the newest technologies, movies, and
              games. Watching and playing football in my spare time, and animals
              have a special place in my heart. Along with collecting and
              designing LEGO.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
