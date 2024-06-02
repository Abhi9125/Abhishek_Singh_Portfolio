import React from "react";

const Header = ({ scrollToSection }) => {
  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Abhishek Singh</h1>
        </div>
        <nav className="space-x-4">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-gray-400"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-gray-400"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-gray-400"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="hover:text-gray-400"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="hover:text-gray-400"
          >
            Skills
          </button>
          {/* <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-gray-400"
          >
            Contact
          </button> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
