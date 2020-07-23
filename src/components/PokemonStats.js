import React from "react";

const PokemonStats = ({ pokemon }) => {
  console.log("pokemon: ", pokemon);
  return (
    <section className="pokestat-container">
      <div>{pokemon.name}</div>
    </section>
  );
};

export default PokemonStats;
