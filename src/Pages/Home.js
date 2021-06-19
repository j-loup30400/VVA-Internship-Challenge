import React from "react";
import styled from "styled-components";

import title from "../Images/title.png"

const StyledTitle = styled.h1`
  position: absolute;
width: 50vw;
height: 15vh;
left: 32.5vw;
top: -2vh;
`

const Home = () => {
    return(
        <>
        <StyledTitle>
            <img src={title}></img> 
            
            </StyledTitle>
        </>
    )
}

export default Home;