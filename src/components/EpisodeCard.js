import React from "react";

export default function EpisodeCard({ ep }) {
  return (
    <div className="card">
      <h2>Title: {ep.name}</h2>
      <h2>Air Date: {ep.air_date}</h2>
      <h2>Episode: {ep.episode}</h2>
    </div>
  );
}
