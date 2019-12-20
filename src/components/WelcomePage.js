import React from "react";
import { Route } from "react-router-dom";
import { Title } from "./Styles.js";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <Title>Welcome to the ultimate fan site!</Title>
      </header>
    </section>
  );
}
