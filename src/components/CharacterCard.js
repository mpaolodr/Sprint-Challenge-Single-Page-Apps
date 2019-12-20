import React from "react";
import { Card, ImgCont, Text, Img } from "./Styles.js";

export default function CharacterCard({ char }) {
  return (
    <Card>
      <ImgCont className="imgCont">
        <Img src={char.image} alt="" />
      </ImgCont>
      <Text>Name: {char.name}</Text>
      <Text>Species: {char.species}</Text>
      <Text>Gender: {char.gender}</Text>
    </Card>
  );
}
