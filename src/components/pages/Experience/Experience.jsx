import React from "react";

const Experience = () => {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl primary-text font-bold mb-4">Experience</h3>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-8 h-8 border-2 border-gray-500 rounded-full">
                    <svg
                      className="w-4 text-gray-500"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-400" />
              </div>
              <div className="pt-1 pb-8">
                <p className="text-lg font-semibold primary-text">
                  Software Developer Intern
                </p>
                <p className=" text-gray-700 font-medium">Dot Com Labs LLP</p>
                <p className=" text-gray-500 mb-2">03/2021 - 07/2021</p>
                <ul className="text-sm text-gray-500 leading-6 ul-bullet">
                  <li>Build stable and maintainable codebases using React.</li>
                  <li>
                    Enhanced user experience and accomplish webpage objectives
                    by creating site structure, navigation, page optimization
                    and graphics integraton.
                  </li>
                  <li>Developed user friendly and responsive websites.</li>

                  <li>
                    Devloped Full Stack web application using React in Frontend
                    and Node.js, Express.js in Backend.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-8 h-8 border-2 border-gray-500 rounded-full">
                    <svg
                      className="w-4 text-gray-500"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-400" />
              </div>
              <div className="pt-1 pb-8 ">
                <p className=" text-lg font-semibold primary-text">
                  Full Stack Developer
                </p>
                <p className=" text-gray-700 font-medium">Linkedphone</p>
                <p className=" text-gray-500 mb-2">08/2021 - Present</p>
                <ul className="text-sm text-gray-500 leading-6 ul-bullet">
                  <li>
                    Made ui changes in their existing Platform using HTML,CSS,
                    JavaScript and Jquery.
                  </li>
                  <li>
                    Developed new features and functionality using Node.js
                  </li>
                  <li>
                    Developed websocket api using AWS lambda and API gateway in
                    Node.js
                  </li>
                  <li>Moved their existing AI feature to aws lambda.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
