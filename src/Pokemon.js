import React from "react";

export default function Pokemon(props){
    return(
        <div className="Pokemon">
           <h1>pokemon {props.id}</h1>
            <p>Name: {props.name}</p>
            <img src={props.sprite} alt={props.name} width={400}/>
        </div>
    );

}

