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