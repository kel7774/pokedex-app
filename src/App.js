import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PokemonList from "./components/PokemonList";
import PokeStats from "./components/PokemonStats";
import Pagination from "./components/Pagination";

function App() {
  const [loading, setLoading] = useState(true);
  const [pokeData, setPokeData] = useState([]);
  const [pokeId, setPokeId] = useState(1);

  const getPokemon = async () => {
    setLoading(true);
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;
      const response = await axios.get(url);
      setPokeData(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    if (pokeId < 1) {
      setPokeId(1);
    }
    getPokemon();
  }, [pokeId]);

  function gotoNextPage() {
    setPokeId(pokeId + 1);
  }

  function gotoPrevPage() {
    if (pokeId === 1) {
      return;
    } else {
      setPokeId(pokeId - 1);
    }
  }

  if (loading) return "Loading...";
  return (
    <div className="App">
      <header className="App-header">Pokedex - Gotta Catch 'em All!</header>
      <main>
        <PokemonList pokemon={pokeData} />
        <Pagination gotoNextPage={gotoNextPage} gotoPrevPage={gotoPrevPage} />
        <PokeStats pokemon={pokeData} />
      </main>
    </div>
  );
}

export default App;
