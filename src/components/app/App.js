import React from "react";
import Counter from "../counter/Counter";
import EpisodeBrowser from "../episode/EpisodeBrowser";
import PokemonBrowser from "../pokemon/PokemonBrowser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hello from "../hello/Hello";
import Pokemon from "../../pages/pokemon/Pokemon";
import SearchPokemon from "../../pages/pokemon/SearchPokemon"




export default function App() {
  return (
    <BrowserRouter>
       <Routes>
           <Route path="/:name" element={<SearchPokemon/>} />
       </Routes>
    </BrowserRouter>
  );
}