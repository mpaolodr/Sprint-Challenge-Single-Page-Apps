import React, { useState } from "react";

export default function SearchForm({ search, query }) {
  return (
    <section className="search-form">
      <form>
        <label>
          Put icon here
          <input
            type="text"
            name="search"
            value={query}
            placeholder="search"
            onChange={search}
          />
        </label>
      </form>
    </section>
  );
}
