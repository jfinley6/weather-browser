import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import Favorites from "./Favorites";
import Content from "./Content";

function Home({temp, currentCity, currentState, setCurrentCity, setCurrentState, favorites, setFavorites}) {
  const [search, setSearch] = useState("");

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
          setCurrentState={setCurrentState}
        />
      </div>
      <div id="contentContainer">
        <Content currentCity={currentCity} temp={temp}
        setCurrentCity={setCurrentCity}
        favorites={favorites}
        setFavorites={setFavorites}
        currentState={currentState}
        setCurrentState={setCurrentState} />
      </div>
    </div>
  );
}

export default Home;
