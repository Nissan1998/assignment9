import React, { useState } from "react";
import logo from "../../assets/All Images/careerhub.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className=" mx-5 md:flex justify-between items-center px-2 bg-sky-50">
        <Link to="">
          <img className="w-28 h-18 fluid px-2" src={logo} alt="" />
        </Link>
        <ul className="items-center   md:flex text-lg">
          <li className="mr-5">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-blue-600 " : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="mr-5">
            <NavLink
              to="/statistics"
              className={({ isActive }) => (isActive ? "text-blue-600 " : "")}
            >
              Statistics
            </NavLink>
          </li>
          <li className="mr-5">
            <NavLink
              to="/applied"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "default"
              }
            >
              Applied Jobs
            </NavLink>
          </li>
          <li className="mr-5">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "default"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <button className=" border  w-36 h-12 rounded-md text-white text-lg bg-gradient-to-r from-indigo-500 to-blue-500 font-semibold">
          Start Applying
        </button>
      </div>
    </div>
  );
};

export default Header;
