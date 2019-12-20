import React from "react";

export default function CharacterCard({ char }) {
  return (
    <div className="card">
      <div className="imgCont">
        <img src={char.image} alt="" />
      </div>
      <h2>Name: {char.name}</h2>
      <h2>Species: {char.species}</h2>
      <h2>Gender: {char.gender}</h2>
    </div>
  );
}
