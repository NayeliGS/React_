import React, { useEffect, useState } from "react";
import Pokemon from "../pokemon/Pokemon";

export default function PokemonBrowser() {
    
    const [pokemonId, setPokemoId] = useState(0);
    const [pokemons, setPokemons] = useState([]);
    const [activeId, setActiveId] = useState({});

    useEffect(() => {
        console.log("Render");

        const pokemonNames = ["bulbasaur","charmander","squirtle","pikachu"];

        async function getPokemonData() {
            const pokemons = pokemonNames.map(async (pokemonName) => {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                const data = await response.json();
                const pokemon = {
                    id: data.id,
                    name: data.name,
                    sprite: data.sprites.front_default,
                    types: data.types.map(type => {return type.type.name})
                }

                console.log("Getting pokemon", pokemon.name);

                return pokemon;
         });

         setPokemons(await Promise.all(pokemons))
        } 
        getPokemonData();
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

    function searchPokemon() {
        
        const pokemonName = (document.getElementById("pokemonName").value).toLowerCase();
    

        const pokemon = pokemons.find(pokemon => pokemon.name === pokemonName);
        if(pokemon){
            setActiveId(pokemon);
            return;
        }else{
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
          .then(response => response.json())
          .then(data => {
            
            const pokemon = {
                id: data.id,
                name: data.name,
                sprite: data.sprites.front_default,
                types: data.types.map(type => {return type.type.name})
            }

            setPokemons([...pokemons,pokemon]);
            setActiveId(pokemon);
          })

        .catch(error => {
            alert("Pokemon not found")
          });

        }

    

   /*  function searchPokemon(event) {
        event.preventDefault();
        const pokemonId = Number(document.getElementById("pokemonId").value);
        const pokemonName = document.getElementById("pokemonName").value;

        const pokemonIdFound = pokemonsDB.find(pokemon => pokemon.id === pokemonId);
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
          .then(response => response.json())
          .then(data =>{
            console.log(data);
          }); */
/* 
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
        } */
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

{/* ///////////////Insertar  */}
                        {/* <form onSubmit={insertPokemon}>
                            <input id="pokemonId" type="text" placeholder="Ingresa Pokomen ID" />
                            <input id="pokemonName" type="text" placeholder="Ingresa nombre de pokemon" />
                            <input id="pokemonSprite" type="text" placeholder="Ingresa una imagen del pokemon" />
                            <button type="submit">Insertar</button>
                        </form> */}


{/* //////////////BUSCAR                         */}
                        {/* <form onSubmit={searchPokemon}> */}
                            {/* <input id="pokemonId" type="text" placeholder="Ingresa Pokomen ID" /> */}
                            <input id="pokemonName" type="text" placeholder="Ingresa nombre de pokemon" />
                            <button type="button" onClick={searchPokemon}>Insertar</button>
                        {/* </form> */}

                       
                        {/* <input id="pokemonName" type="text" placeholder="Ingresa nombre de pokemon" onChange={searchPokemon}/> //Buscaba un pokemon                        <button onClick={searchPokemon}>Buscar pokemon</button> */}
                        {
                            activeId.name ? (
                                <Pokemon id={activeId.id} name={activeId.name} sprite={activeId.sprite} types={activeId.types}  />
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