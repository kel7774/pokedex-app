import React, { useState, useEffect } from "react";
import PokeDex from "pokedex-promise-v2";

export default function Search() {
  const P = new PokeDex();
  const [pokemon, setPokemon] = useState([]);
  const [value, setValue] = useState("");
  const getAllPokemon = () => {
    let interval = {
      limit: 10000,
      offset: 0,
    };
    P.getPokemonsList(interval).then((response) =>
      setPokemon(response.results)
    );
  };

  useEffect(() => {
    getAllPokemon();
  }, [pokemon]);

  return (
    <div>
      <input type="search" placeholder="Search Pokedex..." value={value} />
    </div>
  );
}
