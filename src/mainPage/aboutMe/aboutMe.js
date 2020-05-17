import React from "react";

const AboutMe = () => {
  return (
    <div>
      <header className="aboutMeee">
        <div className="header-wrapper">
          <h1>It's Me, </h1>
          <h1>Jessica Lair </h1>
          <div className="my-image">
            <div className="image image-pan " />
            <p className="rae">
              Photo by{" "}
              <a href="https://www.facebook.com/Studio.Pineapple/">
                Studio Pineapple
              </a>
            </p>
          </div>
          <p className="background-content">
            After 10 years, I traded in concerts and the maestro for code when I
            left my life as an opera singer and learned Javascript, jQuery, HTML
            and CSS. Now, I work as a Software Engineer. No, I will not sing for
            you, but I will fix that website you broke and probably make it a
            lot faster.
            <br />
            <br />
            I find happiness in UI and CSS, and I enjoy looking at something and
            seeing if I can translate it to the web without using any
            javascript, all the while keeping the end user in the forefront of
            my mind.
            <br />
            <br />
            I am a creator by heart. This gives me the drive and motivation to take a complex issue and define a clear and thoughtful solution in order to move forward. I chose to teach myself how to code and move to San Francisco from North Carolina because I truly believe that technology has the opportunity to bring us closer together as a universal family. I believe that a renewed universal focus on positive social impact will facilitate the cycle of long-term success for our communities.
            <br />
            <br />
I love to learn, implement and give back to my community, and have a strong interest in building consumer facing applications that change people's lives.
<br />
            <br />
Please reach out if you would like to connect! 
          </p>
          <div className="education">
            <ul>
              <li>BA in Music from Wingate University</li>
              <li>Self-taught Software Engineer</li>
            </ul>
          </div>
        </div>
      </header>
      <div className="reference">Design inspired by Jen Simmons</div>
    </div>
  );
};

export default AboutMe;
