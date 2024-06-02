import React from "react";

const Projects = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="projects"
      className="bg-gray-100 text-gray-900 py-16"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Movieflix</h3>
            <p className="text-lg mb-2">
              Developed a comprehensive Netflix clone with React, featuring:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Step-by-step UI build process from project setup using Create
                React App to deploying with Firebase.
              </li>
              <li>
                Firebase integration for secure user sign-in/sign-up processes,
                real-time validation, and onAuthStateChange listener.
              </li>
              <li>
                Integrated TMDB APIs for real-time movie data and custom hooks
                for fetching and displaying trailers.
              </li>
              <li>Responsive UI with Tailwind CSS.</li>
            </ul>
            <p className="mt-2 text-sm">
              Technologies used: React, React Router, Redux, React Hooks,
              Tailwind CSS, Firebase, Fetch TMDB API
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Youtube_Clone</h3>
            <p className="text-lg mb-2">
              Developed a YouTube clone with features like:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Search feature and suggestion using a custom YouTube Suggestion
                API.
              </li>
              <li>
                Debounce function to optimize API calls and reduce loading time.
              </li>
              <li>
                Live chat component with random names and messages, polling
                function for fetching new messages every 1.5 seconds.
              </li>
              <li>
                Recursive component to handle nested replies with an indication
                border.
              </li>
            </ul>
            <p className="mt-2 text-sm">
              Technologies used: React, React Router, React Hooks, Tailwind CSS,
              Fetch API
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">
              Hunger Point Food Deliver App
            </h3>
            <p className="text-lg mb-2">
              Crafted a responsive Swiggy-like web application with features
              like:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Dynamic UI for displaying Swiggy API-fetched restaurant data
                with name filtering and top-rated options.
              </li>
              <li>
                Redux for state management enabling efficient cart operations
                and lazy loading for menu performance enhancement.
              </li>
              <li>
                Internet connectivity indicators, Shimmer effects, and dynamic
                offers using HOCs.
              </li>
            </ul>
            <p className="mt-2 text-sm">
              Technologies used: React, React Router, Redux, React Hooks,
              Tailwind CSS, Fetch Swiggy API
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Projects;
