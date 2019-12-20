import React from "react";

export default function CharacterCard({ char }) {
  return (
    <div className="card">
      <div className="imgCont">
        <img src={char.image} alt="" />
      </div>
      <h2>{char.name}</h2>
      <h2>{char.species}</h2>
      <h2>{char.gender}</h2>
    </div>
  );
}
