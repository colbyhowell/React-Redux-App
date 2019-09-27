import React from "react";
import "./App.css";
import Beer from "./img/beer.jpg";

import BreweryList from "./components/breweries";

function App() {
  return (
    <div className="App">
      <img className="beerImage" src={Beer} alt="beeeeer"></img>
      <h1>FIND SOME BREWS</h1>
      <BreweryList />
    </div>
  );
}

export default App;
