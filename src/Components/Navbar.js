import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.div`
width: 5vw;
height: 119vh;
position: absolute;
left: 0%;
right: 0%;
top: 0%;
background-color: white;
z-index: 1;
bottom: -0.22%;
box-shadow: 1px 1px 16px rgba(0, 0, 0, 0.16);

`


const Navbar =() => {
    return(
        <StyledNav>
         <div className="iconRick"></div>
         <Link to="/" className="list"></Link>
         <Link to="/episode" className="episode"></Link>
        </StyledNav>
    )
}

export default Navbar