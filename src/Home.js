import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import Favorites from "./Favorites";
import Content from "./Content";

function Home() {
  const [favorites, setFavorites] = useState([]);
  const [currentCity, setCurrentCity] = useState("")
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState()
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

  function handleSearch(e) {
    setSearch(e)
  }

  const displayedFavorite = favorites.filter((favorite) => favorite.city.toLowerCase().includes(search.toLowerCase()))

  function handleSort(e) {

  }

  return (
    <div id="home">
      <div id="favoritesContainer">
        <Filters handleSearch={handleSearch} />
        <Favorites favorites={displayedFavorite} />
      </div>
      <div id="contentContainer"><Content /></div>
    </div>
  );
}

export default Home;
