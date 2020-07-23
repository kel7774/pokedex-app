import React from "react";

const PokemonStats = (props) => {
  return (
    <section className="pokestat-container">
      {/* todo: map through unordered list & display name, height, weight */}
      <ul>
        <li>Name:</li>
        <li>Height:</li>
        <li>Weight:</li>
      </ul>
    </section>
  );
};

export default PokemonStats;
