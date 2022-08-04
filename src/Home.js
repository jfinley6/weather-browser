import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import Favorites from "./Favorites";
import Content from "./Content";

function Home() {
  const [favorites, setFavorites] = useState([]);
  const [currentCity, setCurrentCity] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (localStorage.getItem("cities") === null) {
      fetch("http://localhost:3000/cities")
        .then((res) => res.json())
        .then((data) => {
          setFavorites(data);
          setCurrentCity(data[0].city);
          localStorage.setItem("cities", JSON.stringify(data));
        });
    } else {
      setFavorites(JSON.parse(localStorage.getItem("cities")));
      setCurrentCity(JSON.parse(localStorage.getItem("cities"))[0].city);
    }
  }, []);

  function handleSearch(e) {
    setSearch(e);
  }

  const displayedFavorite = favorites.filter((favorite) =>
    favorite.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id="home">
      <div id="favoritesContainer">
        <Filters handleSearch={handleSearch} />
        <Favorites
          favorites={displayedFavorite}
          setCurrentCity={setCurrentCity}
        />
      </div>
      <div id="contentContainer">
        <Content currentCity={currentCity}
        setCurrentCity={setCurrentCity}
        favorites={favorites}
        setFavorites={setFavorites} />
      </div>
    </div>
  );
}

export default Home;
