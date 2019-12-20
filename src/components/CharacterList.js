import React from "react";
import { List } from "./Styles.js";

//components
import CharacterCard from "./CharacterCard.js";

export default function CharacterList({ data }) {
  return (
    <List>
      {data.map(char => {
        return <CharacterCard char={char} />;
      })}
    </List>
  );
}
