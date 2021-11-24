import React from "react";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl primary-text font-bold mb-4">Education</h3>

            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-8 h-8 border-2 border-gray-500 rounded-full"></div>
                </div>
                <div className="w-px h-full bg-gray-400" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg primary-text font-semibold">
                  B.tech(Computer Science and Eng.)
                </p>
                <p className=" text-gray-500 ">
                  Lovely Professional University, Phagwara
                </p>
                <p className=" text-gray-500 ">08/2017 - 06/2021,</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-8 h-8 border-2 border-gray-500 rounded-full"></div>
                </div>
                {/* <div className="w-px h-full bg-gray-600" /> */}
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg primary-text font-semibold">
                  XII(CBSE)
                </p>
                <p className=" text-gray-500 ">
                  Archies Higher Secondary School, Kanpur
                </p>
                <p className=" text-gray-500 ">04/2015 - 02/2016,</p>
              </div>
            </div>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
