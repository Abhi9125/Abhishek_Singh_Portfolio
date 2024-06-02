import React from "react";

const Experience = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="experience" className="bg-white text-gray-900 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">
              Web Development Intern | PepCoding (Scaler)
            </h3>
            <p className="text-lg mb-2">Mar 2022 – Sep 2022</p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Assisted in front-end development for Nados.io's career and
                content pages, enhancing user functionality.
              </li>
              <li>
                Developed a student progress tracking dashboard, improving
                communication and query resolution.
              </li>
              <li>
                Collaborated with the front-end team, suggesting enhancements,
                and aiding in bug fixes for Nados.io.
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">
              Web Developer Intern | SellerFly
            </h3>
            <p className="text-lg mb-2">Mar 2024 – Present</p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Developed a full-fledged website for the company's online
                service capabilities.
              </li>
              <li>
                Collaborated with cross-functional teams to translate business
                requirements into technical specifications and actionable tasks.
              </li>
              <li>
                Implemented responsive design principles to ensure the website's
                optimal performance across various devices and platforms.
              </li>
              <li>
                Participated in the full software development lifecycle, from
                conception and design to development and deployment.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Experience;
