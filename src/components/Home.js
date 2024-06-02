import React from "react";
import abhi_image from "../image/image.png";

const Home = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="home"
      className="bg-gray-900 text-white min-h-screen flex items-center justify-center"
    >
      <div className="text-center max-w-lg px-4">
        <img
          src={abhi_image}
          alt="Abhishek Singh"
          className="h-40 w-40 rounded-full mx-auto mb-6 border-4 border-gray-700 shadow-lg"
        />
        <h2 className="text-4xl font-bold mb-2">Hi, I'm Abhishek Singh</h2>
        <p className="text-xl mb-6">
          A passionate software developer with experience in front-end
          development
        </p>
        <div className="flex justify-center items-center space-x-4 mb-8">
          <p className="text-lg">📞 +91-8318819961</p>
          <p className="text-lg">📧 abhi.singh3132@gmail.com</p>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded shadow-md"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded shadow-md"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
});

export default Home;
