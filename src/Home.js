import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import Favorites from "./Favorites";
import Content from "./Content";

function Home() {
  const [favorites, setFavorites] = useState([]);
  const [currentCity, setCurrentCity] = useState("")

  useEffect(() => {
    if (localStorage.getItem("cities") === null) {
      console.log("hello");
      fetch("http://localhost:3000/cities")
        .then((res) => res.json())
        .then((data) => {
          setFavorites(data);
          setCurrentCity(data[0].city)
          localStorage.setItem("cities", JSON.stringify(data));
        });
    } else {
      setFavorites(JSON.parse(localStorage.getItem("cities")))
      setCurrentCity(JSON.parse(localStorage.getItem("cities"))[0].city);

    }
  }, []);

  return (
    <div id="home">
      <div id="favoritesContainer">
        <Filters />
        <Favorites favorites={favorites} />
      </div>
      <div id="contentContainer"><Content /></div>
    </div>
  );
}

export default Home;
