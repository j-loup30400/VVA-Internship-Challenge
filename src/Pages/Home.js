import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <>
        <h1>I'm the Home page </h1>
        <Link to="/Episode">Episode</Link>
        </>
    )
}

export default Home;