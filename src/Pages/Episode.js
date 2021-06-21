import React from "react";
import EpisodeList from "../Components/Api/EpisodeList";
import Gif from "../Images/gif.gif";

const episode = () => {
  return (
    <>
      <h1 className="titleEpisode">Episodes</h1>
      <div className="container-epi">
        <EpisodeList />
      </div>
      <div className="gif-rick">
        <img className="imIn" src={Gif} alt="gif"></img>
      </div>
    </>
  );
};

export default episode;
