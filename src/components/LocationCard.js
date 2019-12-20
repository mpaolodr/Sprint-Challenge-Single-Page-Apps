import React from "react";
import { Card, Text } from "./Styles";

export default function LocationCard({ loc }) {
  return (
    <Card>
      <Text>Name: {loc.name}</Text>
      <Text>Type: {loc.type}</Text>
      <Text>Dimension: {loc.dimension}</Text>
    </Card>
  );
}
