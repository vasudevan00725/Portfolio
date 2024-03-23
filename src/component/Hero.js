import React from "react";
import HeroImg from "../asset/Hero.jpg";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

function Hero() {
  const config = {
    subtitle: "Im Vasudevan Ravi..",
    jobdec: "React js Developer",
  };

  return (
    <section className="flex px-5 py-20 bg-secondary">
      <div className="md:w-1/2">
        <h1 className=" text-black text-6xl font-hero-font">
          Hi,
          <br />
          {config.subtitle} <br />
          <p className="text-2xl py-1">{config.jobdec}</p>
        </h1>
        <div className=" flex ph-10 py-5 md:w-1/2">
          <a href="#" className="pr-5 hover:text-white">
            <AiFillLinkedin size={40} />
          </a>
          <a href="#" className="pr-5 hover:text-white">
            <AiFillInstagram size={40} />
          </a>
          <a href="# " className="hover:text-white">
            <AiFillFacebook size={40} />
          </a>
        </div>
      </div>
      <div className="md:w-1/2">
        <img className="" src={HeroImg} alt="img"></img>{" "}
      </div>
    </section>
  );
}

export default Hero;
