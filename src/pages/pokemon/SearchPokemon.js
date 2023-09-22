import React, { useEffect, useState } from "react";
import Pokemon from "../../components/pokemon/Pokemon";
import { useParams } from "react-router-dom";

export default function SearchPokemon() {

    const [activeId, setActiveId] = useState({});
    const {name} = useParams();
    console.log(name);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
          .then(response => response.json())
          .then(data => {
            const pokemon = {
                id: data.id,
                name: data.name,
                sprite: data.sprites.front_default,
                types: data.types.map(type => {return type.type.name})
            }
            console.log(pokemon);
            setActiveId(pokemon);
          });
  },[name]);
  return (
    <>
     <Pokemon id={activeId.id} name={activeId.name} sprite={activeId.sprite} types={activeId.types}  />
    </>
  )
}

