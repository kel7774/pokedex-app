import React, { useState, useEffect } from "react";
import PokeDex from "pokedex-promise-v2";
import Fuse from "fuse.js";
import capitalize from "../helpers/stringFormatter";
import Styles from "../styles/SearchStyles";

export default function Search({ onSelect }) {
  const P = new PokeDex();
  const [pokemon, setPokemon] = useState([]);
  const [query, updateQuery] = useState("");
  const [results, setResults] = useState([]);
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
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.1,
  });

  function onSearch(e) {
    updateQuery(e.target.value);
  }

  const handleEnter = async () => {
    const foundResults = await fuse.search(query, { limit: 15 });
    const foundArray = query
      ? foundResults.map((pokemon) => pokemon.item)
      : foundResults;
    setResults(foundArray);
  };

  return (
    <Styles>
      <input
        type="text"
        placeholder="Search Pokedex ..."
        className="search-input"
        value={query}
        onChange={onSearch}
        onKeyDown={handleEnter}
      />
      <img src={require("../assets/icons/Search.svg")} alt="Search Icon" />
      <div className="container">
        {results
          ? results.map((p, index) => (
              <div key={index} className="results-map">
                <p>{capitalize(p.name)}</p>
              </div>
            ))
          : null}
      </div>
    </Styles>
  );
}
