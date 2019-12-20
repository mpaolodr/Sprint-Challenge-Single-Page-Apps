import React from "react";

//components
import CharacterCard from "./CharacterCard.js";

export default function CharacterList({ data }) {
  return (
    <section className="character-list">
      {data.map(char => {
        return <CharacterCard char={char} />;
      })}
    </section>
  );
}
