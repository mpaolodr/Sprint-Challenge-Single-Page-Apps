import React from "react";
import { List } from "./Styles.js";

//component
import LocationCard from "./LocationCard.js";

export default function LocationsList({ data }) {
  return (
    <List>
      {data.map(loc => {
        return <LocationCard loc={loc} />;
      })}
    </List>
  );
}
