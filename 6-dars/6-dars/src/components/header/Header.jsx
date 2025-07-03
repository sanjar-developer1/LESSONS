import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <li>
        <NavLink to="/">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/home">About</NavLink>
      </li>
    </div>
  );
};

export default Header;
