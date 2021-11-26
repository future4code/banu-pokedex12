import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DestailsPage from "../pages/DetailsPage";
import HomePage from "../pages/HomePage";
import PokedexPage from "../pages/PokedexPage";

export const Router = () => {

  
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/"  exact element= {<HomePage/>}/>
      <Route path="/pokedex"  exact element= {<PokedexPage/>}/>
      <Route path="/detalhes"  exact element= {<DestailsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

// export default Router;
