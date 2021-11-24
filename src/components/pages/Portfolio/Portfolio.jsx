import React from "react";
import image1 from "../../../images/1.png";
import image2 from "../../../images/2.png";
import image3 from "../../../images/3.png";
import image4 from "../../../images/4.png";
import PortfolioItem from "./PortfolioItem";

const portfolioData = [
  {
    id: 1,
    image: image1,
    title: "Payifi - Frontend Website",
    link: "https://starc007-dev.netlify.app/",
    description:
      "Simple responsive website built in React and Bootstrap. I've built this website during my internship",
  },
  {
    id: 2,
    image: image2,
    title: "DODO - Frontend Website",
    link: "https://dodo-test.netlify.app/",
    description:
      "Built this responsive website using React during my intership",
  },
  {
    id: 3,
    image: image3,
    title: "Portfolio website",
    link: "https://saurrabh.netlify.app/",
    description: "It's my first portfolio website using React and Tailwindcss",
  },
  {
    id: 4,
    image: image4,
    title: "My Second Portfolio website",
    link: "#0",
    description:
      "Its my second portflio website with different designs using React and Tailwindcss",
  },
];

const Portfolio = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {portfolioData.map((portfolio, id) => (
          <PortfolioItem portfolio={portfolio} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
