import axios from "axios";

export const fetchPokemon = async (id) => {
  await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
};
