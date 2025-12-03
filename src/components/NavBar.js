import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar">
    <NavLink exact to="/">Home</NavLink>
    <NavLink to="/about">Actors</NavLink>
    <NavLink to="/directors">Directors</NavLink>
    <NavLink to="/movies">Movies</NavLink>
  </div>;
}

export default NavBar;
