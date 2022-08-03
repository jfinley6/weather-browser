import React from "react";

function Favorites({ favorites, setCurrentCity }) {

  function handleFavorite(value){
setCurrentCity(value)
  }
  const favoritesCards = favorites.map((favorite) => (
    <span key={favorite.id}>
  
      <button onClick={() => handleFavorite(favorite.city)}
        style={{
          height: "12vh",
          width: "80%",
          fontSize: "1em",
          marginTop: "5px",
        }}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        {favorite.city}
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
