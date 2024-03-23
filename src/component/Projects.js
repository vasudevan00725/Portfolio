import React from "react";
import ecom from "../asset/ecommerce.jpg";
import ecom1 from "../asset/ecommerce1.jpg";
import ecom2 from "../asset/ecommerce2.jpg";

function Projects() {
  const config = {
    Projects: [
      {
        Image: ecom,
        decscription:
          "  Description: Developed a personal portfolio website showcasing my skills, projects, and experiences. Technologies Used React.js, Tailwind CSS, JavaScript",
        link: "https://github.com/vasudevan00725/React",
      },
      {
        Image: ecom1,
        decscription:
          "  Description: Developed a personal portfolio website showcasing my skills, projects, and experiences. Technologies Used React.js, Tailwind CSS, JavaScript",
        link: "https://github.com/vasudevan00725/React",
      },
      {
        Image: ecom2,
        decscription:
          "  Description: Developed a personal portfolio website showcasing my skills, projects, and experiences. Technologies Used React.js, Tailwind CSS, JavaScript",
        link: "https://github.com/vasudevan00725/React",
      },
    ],
  };

  return (
    <section
      id="projects"
      className="flex flex-col py-5 px-5 justify-center bg-secondary subpixel-antialiased"
    >
      {" "}
      <div>
        <div className="flex-col text-4xl text-black">
          <h1>Projects</h1>

          <p className=" text-black text-base p-10  w-full">
            My personal portfolio website is a sleek and responsive showcase of
            my web development expertise. Featuring clean design and smooth
            transitions, it highlights my skills, projects, and contact
            information. With seamless navigation and interactive elements, such
            as smooth scrolling and form validation, it offers visitors an
            engaging user experience. Optimized for performance and
            accessibility, this portfolio demonstrates my commitment to
            delivering high-quality web solutions. Explore my work and get in
            touch to discuss potential collaborations.
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col px-10 gap-5 md:flex-row">
          {config.Projects.map((Projects) => (
            <div className="relative">
              <img
                className="h-[350px] w-[500px] rounded-2xl"
                src={Projects.Image}
              ></img>
              <div className="project-dec">
                <p className="text-center py-5 px-5 text-white">
                  {Projects.decscription}
                </p>

                <div>
                  <a
                    className="btn flex justify-center text-white"
                    target="_blank"
                    href={Projects.link}
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
