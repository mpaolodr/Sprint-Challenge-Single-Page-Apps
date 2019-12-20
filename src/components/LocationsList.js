import React from "react";

//component
import LocationCard from "./LocationCard.js";

export default function LocationsList({ data }) {
  return (
    <section className="location-list">
      {data.map(loc => {
        return <LocationCard loc={loc} />;
      })}
    </section>
  );
}
