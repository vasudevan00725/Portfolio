import React from "react";
import resimg from "../asset/resume.jpg";

function Resume() {
  const config = {
    link: "https://drive.google.com/file/d/1oBueuYvwzfiOL_fFndW_jVXEl3B62IVw/view?usp=drive_link",
  };
  return (
    <section
      id="resume"
      className="flex flex-col md:flex-row bg-primary bg-gradient-to-r from-gray-200 to-gray-600 ...px-5"
    >
      <div className=" py-5 md:w-1/2 flex justify-end">
        <img className="w-[600px] rounded-3xl" src={resimg}></img>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white pl-5">
          <h1 className="text-4xl border:bg-primary mc-5 w-[170]"> Resume</h1>
          <p className="pb-5 ">
            Click and download the resume
            <a className="btn" href={config.link}>
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resume;
