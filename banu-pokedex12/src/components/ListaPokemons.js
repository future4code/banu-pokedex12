import { Card, Imagem, Nome, Painel, Corpo } from "../styles/styles";
import { getPokemons } from "../api/pokemon";
import React, { useState } from "react";

export function ListaPokemons(){ 
    let [lista, setLista] = useState([]);
    let lista2 = <div></div>;
    let pokedex = [];
 //   const navigate = useNavigate();
    const gerarLista = async() => {
        try{
            const listaAPI = await getPokemons("/pokemon");
            setLista (listaAPI) 
        }catch(err){
            setLista(<h1>Algo deu Errado</h1>)
            console.log(err)
        }
    }

    const onClickMostrarLista = () =>{
        gerarLista()             
    }
    const goToDetalhes = (page, pokemon) =>{
        localStorage.setItem("pokemon", pokemon.name)
        console.log(page)
       // navigate(page);
    }

    const adicionarPokedex = (pok) => {
        pokedex.push(pok);
        localStorage.setItem("pokedex", pokedex)
    }


    lista2 = lista.map((pok => {
        console.log(pok)
        //let url = "https://www.pokemon.com/br/pokedex/" + pok.name 
        return <Card>
        <Imagem src = "" />
        <Nome>{pok.name}</Nome>
        <button onClick = { () => adicionarPokedex(pok)}>Adicionar a Pokédex</button>
        <button onClick = {() => goToDetalhes("/detalhes", pok)}>Ver detalhes</button>
        </Card>
    }))

    return <Corpo>
        <button onClick={onClickMostrarLista}> Mostrar Pokemons</button>
        <Painel>{lista2}</Painel>
        </Corpo>
}