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
            <p>pokemon num: {props.id} </p>
            <p className="pokemonNumber">Name: {props.name}</p>
            <img src={props.sprite} alt={props.name} width={170}/>
        </div>
    );

}

