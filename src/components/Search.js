import React, { useState, useEffect } from "react";
import PokeDex from "pokedex-promise-v2";
import Fuse from "fuse.js";
import capitalize, { formatURL } from "../helpers/stringFormatter";
import Styles from "../styles/SearchStyles";

export default function Search({ handleStateChange }) {
  const P = new PokeDex();
  const [pokemon, setPokemon] = useState([]);
  const [query, updateQuery] = useState("");
  const [results, setResults] = useState([]);

  // fetches all Pokemon from API, sets pokemon state w/ results
  const getAllPokemon = () => {
    let interval = {
      limit: 10000,
      offset: 0,
    };
    P.getPokemonsList(interval).then((response) =>
      setPokemon(response.results)
    );
  };

  // injects ui w/ fetched pokemon
  useEffect(() => {
    getAllPokemon();
  }, [pokemon]);

  // declares instance of fuse search, takes in pokemon by name from fetch in useEffect
  const fuse = new Fuse(pokemon, {
    keys: ["name", "url"],
    includeScore: true,
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.6,
  });

  // updates value as user types within input
  function onSearch(e) {
    updateQuery(e.target.value);
  }

  // will display results from fuse instance & will update as user enters query
  const handleEnter = async () => {
    const foundResults = await fuse.search(query, { limit: 15 });
    const foundArray = query
      ? foundResults.map((pokemon) => pokemon.item)
      : foundResults;
    setResults(foundArray);
  };

  return (
    <Styles>
      <div className="input-container">
        <img
          src={require("../assets/icons/SearchIcon.png")}
          alt="Search Icon"
          className="icon"
        />
        <input
          type="text"
          placeholder="Search Pokedex ..."
          className="search-input"
          value={query}
          onChange={onSearch}
          onKeyDown={handleEnter}
        />
      </div>
      <div className="container">
        {results &&
          results.map((p) => (
            <div
              key={formatURL(p.url)}
              className="results-map"
              onClick={() => {
                if (typeof handleStateChange === "function") {
                  handleStateChange(p.url);
                }
              }}
            >
              <p>{capitalize(p.name)}</p>
            </div>
          ))}
      </div>
    </Styles>
  );
}
