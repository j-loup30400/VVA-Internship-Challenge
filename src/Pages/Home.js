import React from "react";
import styled from "styled-components";
import CharacterList from "../Components/Api/CharacterList";
import title from "../Images/title.png";
import listview from "../Images/listview.png";
import gridview from "../Images/gridview.png";

const StyledContainer = styled.div`




div{
    display: flex;
    flex-wrap: wrap;
    width: 25vw;
    border: black 2px solid;
    justify-content: space-around;
    padding: 8px;
    background-color: white;
    margin: 10px;
}

h2{
    font-size: 1em;
    color: #2C2E4A;
}

img{
    
    width: 20vh;
    height: 20vh;
    
}
`

const Home = () => {
    return(
        <>
     
            <img className="rickTitle" src={title} alt="title" ></img> 
           
           <input className="search" type="text" placeholder="Search a character"></input>
           <p className="sort">sort by:</p>
           <div className="view">
           <input className="newOld" type="choice" placeholder="Newest-Oldest"></input>
           <img src={listview} alt="list" ></img> 
           <img src={gridview} alt="list" ></img>   
           </div>
           <div className="line"></div>
           <div className="container">
           <CharacterList  />
           </div>
        </>
    )
}

export default Home;