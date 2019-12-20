import React, { useState, useEffect } from "react";
import axios from "axios";

//components
import Header from "./components/Header.js";

export default function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1); //for buttons to change pages
  const [category, setCategory] = useState("character"); // for setting the category

  //Fetch data from api
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/${category}/?page=${page}`)
      .then(res => {
        console.log(res.data.results);
        const rawData = res.data.results;
        if (category === "character") {
          const filteredChar = rawData.filter(char =>
            char.name.toLowerCase().includes(query.toLowerCase())
          );
          setData(filteredChar);
        } else if (category === "location") {
          const filteredLoc = rawData.filter(loc =>
            loc.name.toLowerCase().includes(query.toLowerCase())
          );
          setData(filteredLoc);
        } else if (category === "episode") {
          const filteredEp = rawData.filter(ep =>
            ep.episode.toLowerCase().includes(query.toLowerCase())
          );
          setData(filteredEp);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [query, page, category]);

  //handle change in search form
  const handler = e => {
    setQuery(e.target.value);
  };

  return (
    <main>
      <Header />
    </main>
  );
}
