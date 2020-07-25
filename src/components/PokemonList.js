import React from "react";
import Styled from "../styles/PokemonListStyles";

export default function PokemonList({ pokemon }) {
  return (
    <Styled>
      <div className="image-container">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          height={200}
          width={200}
        />
      </div>
    </Styled>
  );
}
