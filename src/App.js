import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import PokemonImage from "./components/PokemonImage";
import Pagination from "./components/Pagination";
import PokeStats from "./components/PokemonStats";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [pokeData, setPokeData] = useState([]);
  const [pokeId, setPokeId] = useState(25);

  // grabs pokemon by id for injection into useEffect
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

  // displays & re-renders new pokemon based on id onto ui
  useEffect(() => {
    if (pokeId < 1) {
      setPokeId(1);
    }
    getPokemon();
  }, [pokeId]);

  // navigates to next pokemon by clicking right arrow
  function gotoNextPage() {
    setPokeId(pokeId + 1);
  }

  // navigates to previous pokemon only if id >=1 by clicking left arrow
  function gotoPrevPage() {
    if (pokeId === 1) {
      return;
    } else {
      setPokeId(pokeId - 1);
    }
  }

  if (loading) return "Loading...";
  return (
    <>
      <div className="App">
        <header className="App-header">Pokedex - Gotta Catch 'em All!</header>
        <Search />
        <main>
          <PokemonImage pokemon={pokeData} />
          <Pagination gotoNextPage={gotoNextPage} gotoPrevPage={gotoPrevPage} />
          <PokeStats pokemon={pokeData} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
