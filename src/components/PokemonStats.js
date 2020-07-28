import React from "react";
import { convertHeight, convertWeight } from "../helpers/converters";
import capitalize from "../helpers/stringFormatter";
import { Styles } from "../styles/PokemonStatStyles";

export default function PokemonStats({ pokemon }) {
  return (
    <Styles className="stats-container">
      <h1># {pokemon.id}</h1>
      <div className="list-item-container">
        <strong>Name: </strong>
        <div className="stat">{capitalize(pokemon.name)}</div>
      </div>
      <div className="list-item-container">
        <strong>Height: </strong>
        <div className="stat">{convertHeight(pokemon.height)} m</div>
      </div>
      <div className="list-item-container">
        <strong>Weight: </strong>
        <div className="stat">{convertWeight(pokemon.weight)} kg</div>
      </div>
    </Styles>
  );
}
