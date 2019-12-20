import React from "react";

export default function LocationCard({ loc }) {
  return (
    <div className="card">
      <h2>Name: {loc.name}</h2>
      <h2>Type: {loc.type}</h2>
      <h2>Dimension: {loc.dimension}</h2>
    </div>
  );
}
