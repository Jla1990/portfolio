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
            When I am not coding, I am usually doing some type of outdoor
            activity. I am a minimalist runner, tea enthusiast, and professional
            explorer.
            <br />
            <br />
            Want to know more about me? Follow me on any of my social medias!
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
