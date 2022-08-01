import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Settings from "./Settings";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
        </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default App;
