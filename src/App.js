import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Settings from "./Settings";
import Footer from "./Footer";

function App() {
  const [currentCity, setCurrentCity] = useState("");
  const [currentState, setCurrentState] = useState("");
  const [favorites, setFavorites] = useState([]);

  const initialCities = [
    {
      city: "Denver",
      state: "CO",
    },
    {
      city: "New York",
      state: "NY",
    },
    {
      city: "Los Angeles",
      state: "CA",
    },
  ];

  useEffect(() => {
    if (localStorage.getItem("cities") === null) {
      setCurrentState(initialCities[0].state);
      setCurrentCity(initialCities[0].city);
      setFavorites(initialCities);
      localStorage.setItem("cities", JSON.stringify(initialCities));
    } else {
      setFavorites(JSON.parse(localStorage.getItem("cities")));
      setCurrentCity(JSON.parse(localStorage.getItem("cities"))[0].city);
      setCurrentState(JSON.parse(localStorage.getItem("cities"))[0].state);
    }
  }, []);

  if (localStorage.getItem("temperature") === null) {
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
            <Home
              temp={temp}
              currentCity={currentCity}
              currentState={currentState}
              setCurrentCity={setCurrentCity}
              setCurrentState={setCurrentState}
              favorites={favorites}
              setFavorites={setFavorites}
            />
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
