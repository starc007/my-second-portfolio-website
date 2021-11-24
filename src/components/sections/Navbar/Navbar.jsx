import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import About from "../../pages/About/About";
import Experience from "../../pages/Experience/Experience";
import Portfolio from "../../pages/Portfolio/Portfolio";

const navbarData = [
  {
    id: 1,
    title: "About",
    to: "/about",
  },
  {
    id: 2,
    title: "Experience",
    to: "/Experience",
  },
  {
    id: 3,
    title: "Projects",
    to: "/project-work",
  },
];

const Navbar = () => {
  return (
    <Router>
      <nav className="md:mx-6 mb-3 px-2 py-3 z-10 sticky top-0 bg-white shadow rounded">
        <div className="flex flex-wrap">
          {navbarData.map((el, id) => (
            <LinkItem el={el} key={id} />
          ))}
        </div>
      </nav>

      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/project-work">
          <Portfolio />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;

const LinkItem = (props) => {
  const { title, to } = props.el;
  return (
    <p className="px-3 lg:mx-5">
      <NavLink
        to={to}
        activeClassName="primary-text"
        className="text-gray-400 text-medium primary-text-hover"
      >
        {title}
      </NavLink>
    </p>
  );
};
