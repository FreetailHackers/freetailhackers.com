import React from "react";
import rhLogo from "../assets/Recordhacks_logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between bg-white px-8 py-1 select-none">
      <a className="text-center no-underline" href="#landing" draggable="false">
        <img
          className="h-14"
          src={rhLogo}
          alt="Record Hacks"
          draggable="false"
        />
      </a>

      <div className="relative flex items-center gap-4">
        <a href="#about">About</a>
        <a href="#schedule">Schedule</a>
        <a href="#faq">FAQ</a>
        <a
          className="button"
          target="_blank"
          href="https://rodeo.freetailhackers.com/login"
        >
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
