import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonStats from "./PokemonStats";
import PokemonImage from "./PokemonImage";

const Container = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        setPokemon(response.data.results);
      })
      .catch((err) => {
        console.log("error message: ", err.message);
        setError(err.message);
        setLoading(true);
      });
  }, []);
  if (loading) {
    return (
      <div>
        <ul>
          {pokemon.map((p, index) => (
            <li key={index}>{p.name}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <div>Loading ...</div>;
  }
};

export default Container;
