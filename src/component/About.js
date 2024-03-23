import React from "react";
import aboutImg from "../asset/about.jpg";

function About() {
  const config = {
    line1:
      "Hello, I'm Vasu, a passionate web developer who completed my Master's in Computer Applications (MCA) in 2017. I specialize in front-end development, particularly in React.js, Tailwind CSS,JavaScript, and CSS. With a strong foundation in these technologies,I strive to create engaging and user-friendly web experiences",
    line2:
      "Skills: Programming Languages: Proficient in JavaScript, HTML, CSS - Front-End Technologies: Experienced in React.js,Tailwind CSS - Design principles Version Control: Well-versed in Git and GitHub for collaborative development Responsive -  Web Design: Ensuring optimal performance across various devices - Problem Solving: Analytical approach to identifying and resolving challenges - Team Collaboration: Effective communication and teamwork abilities",
  };

  return (
    <section
      id="about"
      className="flex flex-col md:flex-row bg-primary bg-gradient-to-r from-gray-400 to-gray-600 ... px-5 subpixel-antialiased"
    >
      <div className="md:w-1/2">
        <img src={aboutImg}></img>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white pl-5">
          <h1 className="text-4xl border:bg-primary mc-5 w-[170] subpixel-antialiased">
            {" "}
            About me
          </h1>
          <p className="pb-5 subpixel-antialiased ">{config.line1}</p>
          <p className="pb-5 subpixel-antialiased">{config.line2}</p>
          <p className="pb-5"></p>
        </div>
      </div>
    </section>
  );
}

export default About;
