import React from "react";
import { Title, Gif } from "./Styles.js";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <Title>Welcome to the ultimate fan site!</Title>
        <Gif>
          <iframe
            src="https://giphy.com/embed/11Tsyjflf2xq2A"
            width="100%"
            height="100%"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://giphy.com/gifs/rick-and-morty-11Tsyjflf2xq2A">
              via GIPHY
            </a>
          </p>
        </Gif>
      </header>
    </section>
  );
}
