import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

//Pages
import Home from "./Pages/Home";
import Episode from "./Pages/Episode";

// NavBar
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Episode" component={Episode} />
      </Switch>
    </>
  );
}

export default App;
