import React from "react";

const Skills = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="skills" className="bg-gray-100 text-gray-900 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Programming Languages</h3>
            <ul className="list-disc list-inside ml-4">
              <li>JavaScript</li>
              <li>Java</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Web Development</h3>
            <ul className="list-disc list-inside ml-4">
              <li>HTML</li>
              <li>CSS</li>
              <li>ReactJs</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">UI Frameworks</h3>
            <ul className="list-disc list-inside ml-4">
              <li>ReactJs</li>
              <li>React Router</li>
              <li>Context API</li>
              <li>Redux toolkit</li>
              <li>React testing library</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Backend Integration</h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                Firebase (Authentication and real-time database operations)
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Version Control</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Git/GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Skills;
