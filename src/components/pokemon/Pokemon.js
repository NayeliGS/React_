import React from "react";
import "./pokemon.css";

export default function Pokemon(props){
    return(
        <div className="pokemon">
          {/*   {
                props.id > 5 ? (
                    <p>Id is greater than 5</p>
                ) : (
                    <p>pokemon num: {props.id} </p>
                )
            } */}
            <p className="pokemonName">Name: {props.name}</p>
            <p>pokemon num: {props.id} </p>
            <p>Types: {props.types}</p>
            <img className="pokemonImg" src={props.sprite} alt={props.name} width={170}/>
        </div>
    );

}

