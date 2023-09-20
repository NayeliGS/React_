import React from "react";

export default function Episode(props){
    return(
        <div className="Episode">
            <h1>Episoode</h1>
            <p>Episode: {props.episode}</p>
            <p>Name: {props.name}</p>
            <img src={props.cover} alt={props.name} width={400}/>
        </div>
    );

}
