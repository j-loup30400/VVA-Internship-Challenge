import React from "react";
import EpisodeList from "../Components/Api/EpisodeList"
import Gif from "../Images/gif.gif"


const episode = () => {
    return(
        <>
        <h1 className="titleEpisode">Episodes</h1>
        <div className="container-epi">
        <EpisodeList/>
        </div>
        <img className="gif-rick" src={Gif} alt="gif"></img>
        </>
    )
}

export default episode;