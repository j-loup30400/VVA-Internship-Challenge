import React from 'react'

export default function EpisodeCard(props) {
    return (
        <div className="call-epi">
            <h2>{props.epi.episode}</h2>
            <h2>{props.epi.air_date}</h2>
            <h2 className="name">{props.epi.name}</h2>
            <h2 className="url">{props.epi.url}</h2>
        </div>
    )
}
