import React, { useState, useEffect } from "react";
import * as API from "../api";
import PokemonStats from "./PokemonStats";
import PokemonImage from "./PokemonImage";

const Container = (props) => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    setPokemon(API.getAbilityByName("stench"));
  });
  return (
    <div>
      <PokemonImage />
      <PokemonStats />
    </div>
  );
};

export default Container;
