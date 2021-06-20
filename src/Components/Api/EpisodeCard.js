import React from 'react'

export default function EpisodeCard(props) {
    return (
        <div className="call-epi">
            <h2 >{props.epi.episode}</h2>
            <h2 className="date-epi">{props.epi.air_date}</h2>
            <h2 className="name-epi">{props.epi.name}</h2>
            <h2 className="url-epi">{props.epi.url}</h2>
        </div>
    )
}
