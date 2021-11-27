import { useState } from "react";
import { getPokemonByName } from "../api/pokemon";
import { Corpo, Painel } from "../styles/styles";

export function Details(){

let [details, setDetails] = useState([]);

const onClickMostrardetalhes = () =>{
    pokemon()             
}

const pokemon = async() => {
    try{
        const pok = await getPokemonByName(localStorage.getItem("pokemon"));
        console.log (pok)
        //setDetails(pok)
    }catch(err){
        //setDetails(err)
    }
}
//pokemon();

return <Corpo>
<button onClick={onClickMostrardetalhes}> Mostrar Detalhes</button>
<Painel><p>{details}</p></Painel>
</Corpo>
}