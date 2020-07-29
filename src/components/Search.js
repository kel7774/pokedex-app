import React, { useState, useEffect } from "react";
import PokeDex from "pokedex-promise-v2";
import Fuse from "fuse.js";

export default function Search({ onSelect }) {
  const P = new PokeDex();
  const [pokemon, setPokemon] = useState([]);
  const [query, updateQuery] = useState("");
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

  const fuse = new Fuse(pokemon, {
    keys: ["name"],
    includeScore: true,
  });

  const results = fuse.search(query);
  const pokeResults = query ? results.map((pokemon) => pokemon.item) : pokemon;

  function onSearch(e) {
    updateQuery(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokedex..."
        value={query}
        onChange={onSearch}
      />
      <div>
        {pokeResults.map((p, index) => {
          return (
            <div key={index} onClick={() => onSelect(p)}>
              {p.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
