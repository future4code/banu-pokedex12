import axios from "axios";

export const URLAPI = "https://pokeapi.co/api/v2"
let lista;

export async function getPokemons (link) {
    let pokemons = await axios
        .get(URLAPI+link)
        .then(response => {
           return response.data.results 
        })
        .catch(err => {
           return err;
        }
    );
    return pokemons;

}

export async function getPokemonByName (pokeName) {
    let pokemon = await axios
      .get(URLAPI +"/pokemon/"+ pokeName)
      .then(response => {
        return response.data
      })
      .catch(err => {
        return err;
      });
    return pokemon;
  };