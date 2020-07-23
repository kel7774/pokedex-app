import Pokedex from "pokedex-promise-v2";

const P = new Pokedex();

P.getAbilityByName("stench")
  .then((response) => console.log(response))
  .catch((error) => console.log("error: ", error));
