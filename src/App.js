import "./App.css";
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Settings from "./Settings";
import Footer from "./Footer";

function App() {
  let [temp, setTemp] = useState("F")

  function handleTemp() {
    if (temp === "F") {
      setTemp("C")
    }
    else {setTemp("F") }
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
