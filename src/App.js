import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import { AppContainer } from "./components/Styles.js";

//components
import WelcomePage from "./components/WelcomePage.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import LocationList from "./components/LocationsList.js";
import EpisodeList from "./components/EpisodeList.js";

export default function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1); //for buttons to change pages
  const [category, setCategory] = useState(""); // for setting the category

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
  const search = e => {
    setQuery(e.target.value);
  };

  const changeCategory = string => {
    setCategory(string);
  };

  return (
    <AppContainer>
      <Header search={search} changeCategory={changeCategory} query={query} />
      <div className="page">
        <Switch>
          <Route path="/char">
            <CharacterList data={data} />
          </Route>
          <Route path="/loc">
            <LocationList data={data} />
          </Route>
          <Route path="/ep">
            <EpisodeList data={data} />
          </Route>
          <Route path="/">
            <WelcomePage />
          </Route>
        </Switch>
      </div>
    </AppContainer>
  );
}
