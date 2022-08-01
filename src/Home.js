import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import Favorites from "./Favorites";

function Home() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("cities") === null) {
      console.log("hello");
      fetch("http://localhost:3000/cities")
        .then((res) => res.json())
        .then((data) => {
          setFavorites(data);
          localStorage.setItem("cities", JSON.stringify(data));
        });
    } else {
      setFavorites(JSON.parse(localStorage.getItem("cities")));
    }
  }, []);

  return (
    <div id="home">
      <div id="favoritesContainer">
        <Filters />
        <Favorites favorites={favorites} />
      </div>
      <div id="contentContainer">Hello</div>
    </div>
  );
}

export default Home;
