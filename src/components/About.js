import React from "react";

const About = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="about" className="bg-white text-gray-900 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-4">
          I am a dedicated software developer with a Master's degree in Computer
          Applications from Chandigarh University. I have a strong foundation in
          front-end development and have built several projects using React,
          Redux, Tailwind CSS, and other technologies.
        </p>
        <p className="text-lg">
          <strong>Education:</strong>
          <br />
          Chandigarh University - Master of Computer Application (2022 - 2024)
          <br />
          Rajarshi School of Management and Technology - Bachelor of Computer
          Application (2017 - 2020)
        </p>
      </div>
    </section>
  );
});

export default About;
