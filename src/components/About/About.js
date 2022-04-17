import React from "react";

const About = () => {
  return (
    <div className="parent py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="main-image">
          <img
            className="w-5/6 mx-auto"
            src="https://i.ibb.co/tQzmzMS/mdali-yellow-bg-profile.png"
            alt="Mohammad Ali"
          />
        </div>
        <div className="about-details">
          <h1 className="active text-5xl font-semibold">Mohammad Ali</h1>
          <h3
            className="text-xl font-semibold"
            style={{ color: "var(--blue)" }}
          >
            Junior Front-end Developer
          </h3>
          <p className="text-slate-600 my-6">
            Hi there, I am Mohammad Ali. I am a junior Front-end web developer
            (still learning). Now, my first goal is how to become a good web
            developer. Then I would love to get a job in a well-developed
            country like USA, Canada etc. I am working hard to achieve my goal.
            In this mission, my friends and the Programming Hero Team giving me
            a great companion.
          </p>
          <a href="https://www.linkedin.com/in/itsproali/" target="_blank">
            <button className="btn">Contact Me</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
