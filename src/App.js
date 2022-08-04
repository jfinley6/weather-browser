import "./App.css";
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Settings from "./Settings";
import Footer from "./Footer";

function App() {
  if (localStorage.getItem("temperature" === undefined)) {
    var currentTemperature = "F";
    localStorage.setItem("temperature", "F");
  } else {
    var currentTemperature = localStorage.getItem("temperature");
  }

  let [temp, setTemp] = useState(currentTemperature);
  
  function handleTemp() {
    if (temp === "F") {
      setTemp("C");
      localStorage.setItem("temperature", "C");
    } else {
      setTemp("F");
      localStorage.setItem("temperature", "F");
    }
  }

  return (
    <div className="App">
      <Navbar />
      <div id="container">
        <Switch>
          <Route exact path="/">
            <Home temp={temp} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/settings">
            <Settings handleTemp={handleTemp} temp={temp} />
          </Route>
        </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default App;
