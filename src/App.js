import React, { useRef } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
// Uncomment the line below if you have a Contact component
// import Contact from './components/Contact';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  // Uncomment the line below if you have a Contact component
  // const contactRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case "home":
        homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "experience":
        experienceRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        skillsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      // Uncomment the lines below if you have a Contact component
      // case 'contact':
      //   contactRef.current.scrollIntoView({ behavior: 'smooth' });
      //   break;
      default:
        break;
    }
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection} />
      <main>
        <Home ref={homeRef} />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Experience ref={experienceRef} />
        <Skills ref={skillsRef} />
        {/* Uncomment the line below if you have a Contact component */}
        {/* <Contact ref={contactRef} /> */}
      </main>
    </div>
  );
};

export default App;
