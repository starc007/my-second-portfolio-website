import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import profile from "../../../images/avi.jpg";

const socials = [
  {
    id: 1,
    icon: <FaGithub />,
    link: "https://github.com/starc007",
  },
  {
    id: 2,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/starc007/",
  },
  {
    id: 3,
    icon: <FaInstagram />,
    link: "https://www.instagram.com/thesaurrabh/",
  },
  {
    id: 4,
    icon: <FaTwitter />,
    link: "https://twitter.com/thesaurrabbh",
  },
];

const Sidebar = () => {
  return (
    <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <img src={profile} alt="shafiqhammad" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-800 font-semibold mb-1">
          Saurabh Chauhan
        </h1>
        <p className="text-sm text-gray-500 mb-3">
          Full Stack Web Developer
          {/* <a href="#0" className="text-purple-600 pl-1">
            Abc Company
          </a> */}
        </p>
        <a
          href="#0"
          className="inline-block mb-3 rounded primary-bg text-center border-0 py-2 px-6 text-white leading-7 tracking-wide "
          download="Resume"
        >
          Download Resume
        </a>
        <div className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </div>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-semibold text-gray-800">
          About Me
        </h3>
        <p className="text-gray-400 text  leading-relaxed">
          I am a Full Stack Developer. Sometimes I code but most of the times I
          find bugs in my code. Also I am a tech and Startup Enthusiast.
          Currently I am working as a Full Stack Developer at{" "}
          <a
            href="https://linkedphone.com/"
            target="_blank"
            className="primary-text"
          >
            Linkedphone
          </a>
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <p className="m-2">
      <a
        href={link}
        target="_blank"
        className="w-8 h-8 bg-gray-100 rounded primary-text flex items-center justify-center hover:text-white primary-bg-hover"
      >
        {icon}
      </a>
    </p>
  );
};
