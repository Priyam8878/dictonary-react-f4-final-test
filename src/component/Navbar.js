

import React from "react";
import {NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="left">
         Dictonary App ❤️
        </div>
        <div className="right">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/history">History</NavLink>
          <NavLink to="/about">About</NavLink>

         
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;


