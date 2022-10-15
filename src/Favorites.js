import React from "react";

function Favorites({ favorites, setCurrentCity, setCurrentState }) {
  function handleFavorite(value) {
    setCurrentCity(value.city);
    setCurrentState(value.state)
  }
  const favoritesCards = favorites.map((favorite) => (
    <span key={`${favorite.city}, ${favorite.state}`}>
      <button
        onClick={() => handleFavorite(favorite)}
        style={{
          height: "12vh",
          width: "80%",
          fontSize: "1em",
          marginTop: "5px",
        }}
        id="favoriteCard"
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        {favorite.city}, {favorite.state}
      </button>
    </span>
  ));

  return (
    <div id="favorites">
      <div id="favoritesList">{favoritesCards}</div>
    </div>
  );
}

export default Favorites;
