import React from "react";
import { Card, Text } from "./Styles";

export default function EpisodeCard({ ep }) {
  return (
    <Card>
      <Text>Title: {ep.name}</Text>
      <Text>Air Date: {ep.air_date}</Text>
      <Text>Episode: {ep.episode}</Text>
    </Card>
  );
}
