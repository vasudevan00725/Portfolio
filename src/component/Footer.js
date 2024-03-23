import React from "react";

const Footer = () => {
  const test = new Date();
  return (
    <div
      id="footer"
      className="py-4 text-center bg-primary text-white subpixel-antialiased bg-gradient-to-r from-gray-200 to-gray-600 ..."
    >
      vasuprofessionalnetwork &copy; {test.getFullYear()}
    </div>
  );
};

export default Footer;
