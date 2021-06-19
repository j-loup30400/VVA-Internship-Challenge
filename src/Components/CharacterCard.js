import React from 'react'

export default function CharacterCard(props) {
    return (
        <div>
        <h1>{props.chars.name}</h1>
        <h2>{props.chars.status}</h2>
        <h2>{props.chars.species}</h2>
        <h3>{props.chars.location}</h3>
        <h2>{props.chars.episode}</h2>
        <img src={props.chars.image} alt="Rick & Morty"></img>
        <h2>{props.chars.created}</h2>
        </div>
    );
}

