import React, { useEffect, useState } from "react";
import "../../App.css";

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

  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div id="about-me">
        <div>
          <h1>About me</h1>
          <br />
          <p>
            When I'm not at school or work, I enjoy being active either in the
            gym or playing football the later I also watch a lot of. A good
            online co-op game with my friends is always fun, but we also try and
            hangout face to face as often as possible. I also try and stay
            creative by building/designing LEGO. I have even started
            photographing my builds and sharing them online.
          </p>
        </div>
        <br />
        <div className="double-element border-black">
          <div className="small-element-containers">
            <h2>Personal information</h2>
            <ul className="emoji-list">
              <li className="item-1">
                Age: {getAge(dateTime)} {bDayMessage}
              </li>
              <li>Nationality: Danish</li>
              <li>Based in: Copenhagen</li>
              <li>BSc: Global Business Informatics - ITU</li>
              <li>MSc: Software Design - ITU</li>
            </ul>
          </div>
          <div className="small-element-containers">
            <h2>Interests</h2>
            <ul className="emoji-list">
              <li>
                Football cheering for Tottenham and the Danish national team.
              </li>
              <li>Counter Strike (and other co-op games) with friends</li>
              <li>Building/designing/photographing LEGO.</li>
              <li>
                <div className="wrap-flex">
                  <p>Fun animal facts!</p>
                  <div>
                    <p
                      onMouseEnter={() => setIsShown(true)}
                      onMouseLeave={() => setIsShown(false)}
                    >
                      🦝
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {isShown && (
          <p>
            🦝Did you know that raccoons have dexterous front paws? That means
            they hold their food kind of like a human when eating.
          </p>
        )}
      </div>
    </>
  );
};

export default AboutMe;
