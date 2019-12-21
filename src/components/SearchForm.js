import React from "react";
import { SearchCont, LabelCont } from "./Styles.js";

//icon
import SearchIcon from "@material-ui/icons/Search";

export default function SearchForm({ search, query }) {
  return (
    <SearchCont>
      <form>
        <LabelCont>
          <SearchIcon />
          <input
            type="text"
            name="search"
            value={query}
            placeholder="search"
            onChange={search}
          />
        </LabelCont>
      </form>
    </SearchCont>
  );
}
