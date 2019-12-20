import React from "react";

export default function LocationCard({ loc }) {
  return (
    <div className="card">
      <h2>{loc.name}</h2>
      <h2>{loc.type}</h2>
      <h2>{loc.dimension}</h2>
    </div>
  );
}
