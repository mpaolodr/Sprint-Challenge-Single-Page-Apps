import React from "react";
import { List } from "./Styles.js";

//components
import EpisodeCard from "./EpisodeCard.js";

export default function EpisodeList({ data }) {
  return (
    <List>
      {data.map(ep => {
        return <EpisodeCard ep={ep} />;
      })}
    </List>
  );
}
