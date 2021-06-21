import React, { useState, useEffect } from "react";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
  const [EpisodeList, SetEpisodeList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode/[1,2,3,4,5,6,7,8,9,10]")
      .then((res) => res.json())
      .then((data) => SetEpisodeList(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {EpisodeList.map((epi, index) => {
        return <EpisodeCard key={index} epi={epi} />;
      })}
    </div>
  );
}
