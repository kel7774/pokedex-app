import React from "react";
import { convertHeight, convertWeight } from "../helpers/converters";
import capitalize from "../helpers/stringFormatter";
import { Styles } from "../styles/PokemonStatStyles";

export default function PokemonStats({ pokemon }) {
  return (
    <Styles>
      <h1># {pokemon.id}</h1>
      <ul>
        <li>Name: {capitalize(pokemon.name)}</li>
        <li>Height: {convertHeight(pokemon.height)} m</li>
        <li>Weight: {convertWeight(pokemon.weight)} kg</li>
      </ul>
    </Styles>
  );
}
