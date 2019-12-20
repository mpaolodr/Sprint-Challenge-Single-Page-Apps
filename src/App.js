import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import { AppContainer, Page } from "./components/Styles.js";

//icons
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

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

  const prevBtn = () => {
    if (page === 1) {
      return;
    } else {
      setPage(page - 1);
    }
  };

  const nxtBtn = () => {
    if (page === data.length) {
      return;
    } else {
      setPage(page + 1);
    }
  };

  return (
    <AppContainer>
      <Header search={search} changeCategory={changeCategory} query={query} />
      <Page>
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route exact path="/char">
            <CharacterList data={data} />
            <NavigateBeforeIcon
              style={{
                position: "absolute",
                top: "50%",
                left: "20px",
                border: "2px solid white",
                color: "white",
                height: "50px",
                width: "20px",
                cursor: "pointer"
              }}
              onClick={prevBtn}
            />
            <NavigateNextIcon
              style={{
                position: "absolute",
                top: "50%",
                right: "20px",
                border: "2px solid white",
                color: "white",
                height: "50px",
                width: "20px",
                cursor: "pointer"
              }}
              onClick={nxtBtn}
            />
          </Route>
          <Route exact path="/loc">
            <LocationList data={data} />
            <NavigateBeforeIcon
              style={{
                position: "absolute",
                top: "50%",
                left: "20px",
                border: "2px solid white",
                color: "white",
                height: "50px",
                width: "20px",
                cursor: "pointer"
              }}
              onClick={prevBtn}
            />
            <NavigateNextIcon
              style={{
                position: "absolute",
                top: "50%",
                right: "20px",
                border: "2px solid white",
                color: "white",
                height: "50px",
                width: "20px",
                cursor: "pointer"
              }}
              onClick={nxtBtn}
            />
          </Route>
          <Route exact path="/ep">
            <EpisodeList data={data} />
            <NavigateBeforeIcon
              style={{
                position: "absolute",
                top: "50%",
                left: "20px",
                border: "2px solid white",
                color: "white",
                height: "50px",
                width: "20px",
                cursor: "pointer"
              }}
              onClick={prevBtn}
            />
            <NavigateNextIcon
              style={{
                position: "absolute",
                top: "50%",
                right: "20px",
                border: "2px solid white",
                color: "white",
                height: "50px",
                width: "20px",
                cursor: "pointer"
              }}
              onClick={nxtBtn}
            />
          </Route>
        </Switch>
      </Page>
    </AppContainer>
  );
}
