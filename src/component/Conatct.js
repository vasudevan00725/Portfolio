import React from "react";
import blgimg from "../asset/blg.png";

function Conatct() {
  const config = {
    email1: "vasuprofessionalnetwork@gmail.com",
    email2: "yoyovasu12345@gmail.com",
    phone: "9600365747",
  };

  return (
    <section
      id="contact"
      className="flex flex-col bg-secondary px-5 py-36 text-black subpixel-antialiased"
    >
      <div className="flex flex-col items-center ">
        <h1 className="text-4xl text-black border:bg-primary mc-5 w-[170] ">
          {" "}
          Contact
        </h1>
        <p className="pb-5  text-black py-2">
          {" "}
          I'm always open to new opportunities, collaborations, and discussions.
          Feel free to connect with me through
        </p>
        <p className="py-2">
          <span className="bold "> Email:</span>
          {config.email1}
        </p>
        <p className="py-2">
          <span className="bold "> Email:</span> {config.email2}
        </p>
        <p className="py-2">
          <span className="bold "> Phone:</span> {config.phone}
        </p>
      </div>
    </section>
  );
}

export default Conatct;
