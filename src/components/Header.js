import React from "react";
import { NavLink } from "react-router-dom";

//import component
import SearchForm from "./SearchForm.js";

export default function Header({ search, changeCategory, query }) {
  return (
    <header className="ui centered">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/char" onClick={() => changeCategory("character")}>
          Characters
        </NavLink>
        <NavLink to="/loc" onClick={() => changeCategory("location")}>
          Location
        </NavLink>
        <NavLink to="/ep" onClick={() => changeCategory("episode")}>
          Episodes
        </NavLink>

        <SearchForm search={search} query={query} />
      </nav>
    </header>
  );
}
