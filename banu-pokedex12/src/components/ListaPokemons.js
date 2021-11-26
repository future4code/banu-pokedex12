import { Card, Imagem, Nome } from "../styles/styles";
import { getPokemons } from "../api/pokemon";
import React, { useState } from "react";

export function ListaPokemons(){ 
    let [lista, setLista] = useState([]);
    const gerarLista = async() => {
        try{
            const listaAPI = await getPokemons("/pokemon");
            console.log(listaAPI)
            setLista (listaAPI)
             
        
        }catch(err){
            setLista(<h1>Algo deu Errado</h1>)
            console.log(err)
        }
    }
        gerarLista()
    return lista.map((pok => {
        return <Card>
        <Imagem src = "" />
        <Nome>{pok.name}</Nome>
         </Card>
         }))
}