import React, {useState} from "react";
import styled from "styled-components";
import CharacterCard from "../Components/CharacterCard";
import CharacterList from "../Components/CharacterList";
import title from "../Images/title.png"


const Home = () => {
    return(
        <>
     
            <img className="rickTitle" src={title} alt="title" ></img> 
            <div>
            {CharacterList.map((chars, id) => {
                return <CharacterCard key={id}
                chars={chars} />
            })}
        </div>
           
        </>
    )
}

export default Home;