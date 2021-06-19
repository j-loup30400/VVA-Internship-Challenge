import React from 'react';
import {Route, Switch} from "react-router-dom";

//Pages
import Home from  './Pages/Home'
import Episode from './Pages/Episode'

function App() {
  return (
    <>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Episode" component={Episode}/>
    </Switch>
    </>
  );
}

export default App;
