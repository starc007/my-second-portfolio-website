import React from "react";
import SkillItem from "./SkillItem";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaAws,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiCplusplus,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="py-4">
      <div className="w-full">
        <div className="md:mx-4">
          <h3 className="text-2xl primary-text font-bold mb-4">Skills</h3>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-around md:px-4 mb-4">
        <div className="md:w-1/2">
          <p className="text-xl font-medium text-gray-600 mt-2">Frontend</p>
          <div className="flex flex-wrap">
            <SkillItem title="ReactJS" icon={<FaReact size={25} />} />
            <SkillItem title="HTML" icon={<FaHtml5 size={25} />} />
            <SkillItem title="CSS" icon={<FaCss3Alt size={25} />} />
            <SkillItem title="Tailwind" icon={<SiTailwindcss size={25} />} />
            <SkillItem title="Bootstrap" icon={<FaBootstrap size={25} />} />
          </div>
        </div>
        <div className="md:w-1/2">
          <p className="text-xl font-medium text-gray-600 mt-2">Backend</p>
          <div className="flex">
            <SkillItem title="NodeJS" icon={<FaNodeJs size={25} />} />
            <SkillItem
              title="ExpressJS"
              icon={
                <i
                  className="devicon-express-original"
                  style={{ fontSize: 25 }}
                ></i>
              }
            />
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-around md:px-4 mb-4">
        <div className="md:w-1/2">
          <p className="text-xl font-medium text-gray-600 mt-2">Database</p>
          <div className="flex">
            <SkillItem title="MongoDB" icon={<SiMongodb size={25} />} />

            <SkillItem title="Firebase" icon={<SiFirebase size={25} />} />
            <SkillItem title="MySQL" icon={<SiMysql size={25} />} />
          </div>
        </div>
        <div className="md:w-1/2">
          <p className="text-xl font-medium text-gray-600 mt-2">
            Programming Languages
          </p>
          <div className="flex">
            <SkillItem title="JS" icon={<IoLogoJavascript size={25} />} />

            <SkillItem title="Python" icon={<FaPython size={25} />} />

            <SkillItem title="C++" icon={<SiCplusplus size={25} />} />
          </div>
        </div>
      </div>

      <div className="md:w-1/2 md:px-4">
        <p className="text-xl font-medium text-gray-600 mt-2">Cloud</p>
        <div className="flex">
          <SkillItem title="AWS" icon={<FaAws size={25} />} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
