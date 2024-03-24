import React from "react";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="flex justify-between px-10 py-8 bg-gradient-to-r from-zinc-600 ... subpixel-antialiased">
      <a className="font-bold text-white text-5xl" href="#home">
        {" "}
        Vasu Portfolio{" "}
      </a>
      <nav class="hidden md:block ">
        <ul className="flex  text-black py-5">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {toggleMenu && (
        <nav class="block md:hidden ">
          <ul
            onClick={() => setToggleMenu(!toggleMenu)}
            nav
            className="flex flex-col  text-white mobile-nav"
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Conatct</a>
            </li>
            <li>
              <a href="#resume">resume</a>
            </li>
          </ul>
        </nav>
      )}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden"
      >
        <Bars3Icon className="text-white h-10" />
      </button>
    </header>
  );
}

export default Header;
