import React from "react";

const SkillItem = ({ title, icon }) => {
  return (
    <div className="px-2 py-3 w-20 h-auto rounded mt-2 mr-2 primary-text  shadow transform hover:scale-105 transition duration-500 ease-in-out">
      <div className="flex justify-center">{icon}</div>
      <p className="text-center text-sm pt-2">{title}</p>
    </div>
  );
};

export default SkillItem;
