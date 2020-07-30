import React from "react";
import Styled from "../styles/PokemonImageStyles";

export default function PokemonImage({ pokemon }) {
  return (
    <Styled>
      <div className="image-container">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          height={`300rem`}
          width={`350rem`}
        />
      </div>
    </Styled>
  );
}
