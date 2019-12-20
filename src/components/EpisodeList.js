import React from "react";

//components
import EpisodeCard from "./EpisodeCard.js";

export default function EpisodeList({ data }) {
  return (
    <section className="episode-list">
      {data.map(ep => {
        return <EpisodeCard ep={ep} />;
      })}
    </section>
  );
}
