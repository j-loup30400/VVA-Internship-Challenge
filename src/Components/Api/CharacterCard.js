import React from 'react'

export default function CharacterCard(props) {
    return (
        <div className="call">
        <img className="pic" src={props.chars.image} alt="Rick & Morty"></img>
        <h1 className="name">{props.chars.name}</h1>
        <h2 className="status">{props.chars.status}</h2>
        <h2 className="species">{props.chars.species}</h2>
        <h2 className="location"> {props.chars.location.name} </h2>
        <h2 className="episodes">{props.chars.episode.lenght}</h2>
        <h2 className="created">{props.chars.created}</h2>
        </div>
    );
}

