import React from "react";
import Counter from "../counter/Counter";
import EpisodeBrowser from "../episode/EpisodeBrowser";
import PokemonBrowser from "../pokemon/PokemonBrowser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hello from "../hello/Hello";
import Pokemon from "../../pages/pokemon/Pokemon";
import SearchPokemon from "../../pages/pokemon/SearchPokemon";
import MainLayout from "../../pages/layouts/MainLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Hello />} />
        </Route>
        <Route path="/pokemon" element={<MainLayout />}>
          <Route path="/pokemon/:name" element={<SearchPokemon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
