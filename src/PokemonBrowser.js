import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

export default function PokemonBrowser() {
    const pokemonsDB = [{
        id: 1,
        name: "bulbasaur",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
        id: 4,
        name: "charmander",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
        id: 7,
        name: "squirtle",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
        id: 25,
        name: "pikachu",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    }];

    const [pokemonId, setPokemoId] = useState(0);
    const [pokemons, setPokemons] = useState([]);
    const [activeId, setActiveId] = useState({});

    useEffect(() => {
        console.log("Render")
        setPokemons(pokemonsDB);
    }, []);

    // useEffect(() => {
    //     console.log("setActiveId")
    //     setActiveId(pokemons[pokemonId]);
    // }, [pokemonId, pokemons]);

    function nextEpisode() {
        if (pokemonId >= pokemons.length - 1) {
            alert("No more pokemons");
            return;
        }
        setPokemoId(pokemonId + 1);
    }

    function previousEpisode() {
        if (pokemonId == 0) {
            alert("No more pokemons");
            return;
        }
        setPokemoId(pokemonId - 1);
    }
    function searchPokemon(event) {
        event.preventDefault();
        const pokemonId = Number(document.getElementById("pokemonId").value);
        const pokemonName = document.getElementById("pokemonName").value;

        const pokemonIdFound = pokemonsDB.find(pokemon => pokemon.id === pokemonId);
        const pokemonFound = pokemonsDB.find(pokemon => pokemon.name.toLowerCase() === pokemonName.toLowerCase());
        if(pokemonFound){
            if(pokemonIdFound.id !== pokemonIdFound.id){
                alert("No te sabes el ID del pokemon");
                return;
            }
            setActiveId(pokemonFound);
        }
        else{
            // alert("Pokemon not found");
            setActiveId({})
        }
    }

    function insertPokemon(event){
        event.preventDefault();
        const pokemonId = Number(document.getElementById("pokemonId").value);
        const pokemonName = document.getElementById("pokemonName").value;
        const pokemonSprite = document.getElementById("pokemonSprite").value;

        const newPokemon = {
            id:pokemonId,
            name:pokemonName,
            sprite:pokemonSprite 
        }

        setPokemons([...pokemons, newPokemon]);
        console.log(pokemons);

    }

    return (
        <div className="PokemonBrowser">
            {
                pokemons.length > 0 ? (
                    <div>
                        <h1>Pokemons Browser</h1>
                        {/* <form onSubmit={searchPokemon}> */}
                        <form onSubmit={insertPokemon}>
                            <input id="pokemonId" type="text" placeholder="Ingresa Pokomen ID" />
                            <input id="pokemonName" type="text" placeholder="Ingresa nombre de pokemon" />
                            <input id="pokemonSprite" type="text" placeholder="Ingresa una imagen del pokemon" />
                            <button type="submit">Insertar</button>
                        </form>
                        {/* <input id="pokemonName" type="text" placeholder="Ingresa nombre de pokemon" onChange={searchPokemon}/> //Buscaba un pokemon                        <button onClick={searchPokemon}>Buscar pokemon</button> */}
                        {
                            activeId.name ? (
                                <Pokemon id={activeId.id} name={activeId.name} sprite={activeId.sprite}  />
                            ) : (
                                <p>No episode selected</p>
                            )
                        }
                        {/* <button onClick={previousEpisode}>Previous</button>
                        <button onClick={nextEpisode}>Next</button> */}
                    </div>
                ): ( <p>Loading...</p> )
            }
        </div>
    );
}