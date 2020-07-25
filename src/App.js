import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PokemonList from "./components/PokemonList";
import PokeStats from "./components/PokemonStats";
import Pagination from "./components/Pagination";

function App() {
  const [loading, setLoading] = useState(true);
  const [pokeData, setPokeData] = useState([]);
  const [pokemon, setPokemon] = useState("pikachu");
  const [currentPageUrl, setCurrentPageUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  useEffect(() => {
    getPokemon();
  }, [pokemon]);

  const getPokemon = async () => {
    setLoading(true);
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await axios.get(url);
      setPokeData(response.data);
      setLoading(false);
      console.log("response", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  if (loading) return "Loading...";
  return (
    <div className="App">
      <header className="App-header">Pokedex - Gotta Catch 'em All!</header>
      <main>
        <PokemonList pokemon={pokeData} />
        <PokeStats pokemon={pokeData} />
        <Pagination
          gotoNextPage={nextPageUrl ? gotoNextPage : null}
          gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        />
      </main>
    </div>
  );
}

export default App;
