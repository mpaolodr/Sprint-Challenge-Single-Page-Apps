import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderCont, NavCont } from "./Styles.js";

//import component
import SearchForm from "./SearchForm.js";

export default function Header({ search, changeCategory, query }) {
  return (
    <HeaderCont className="ui centered">
      <NavCont>
        <NavLink
          style={{ color: "white", fontSize: "1.2rem", textDecoration: "none" }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={{ color: "white", fontSize: "1.2rem", textDecoration: "none" }}
          to="/char"
          onClick={() => changeCategory("character")}
        >
          Characters
        </NavLink>
        <NavLink
          style={{ color: "white", fontSize: "1.2rem", textDecoration: "none" }}
          to="/loc"
          onClick={() => changeCategory("location")}
        >
          Location
        </NavLink>
        <NavLink
          style={{ color: "white", fontSize: "1.2rem", textDecoration: "none" }}
          to="/ep"
          onClick={() => changeCategory("episode")}
        >
          Episodes
        </NavLink>

        <SearchForm search={search} query={query} />
      </NavCont>
    </HeaderCont>
  );
}
