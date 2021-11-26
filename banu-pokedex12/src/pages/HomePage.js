/*Para o usuário escolher entre Área Administrativa e Lista de Viagens
*/

import { useNavigate } from "react-router";
import { ListaPokemons } from "../components/ListaPokemons";
import { Fundo } from "../styles/styles";


function HomePage(){
    const navigate = useNavigate();

    const goToNextPage = (url) =>{
        
         navigate(url);
    }

    return <Fundo>
        <header>
            <button onClick = {() => goToNextPage ("/pokedex")}>Ver Minha Pokedex</button>
            <h1>Pokedex</h1>
        </header>
        
        <ListaPokemons/>

    </Fundo>
}

export default HomePage;