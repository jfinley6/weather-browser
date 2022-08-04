import React, { useState, useEffect } from "react";
import PlacesAutocomplete from "react-places-autocomplete";

function Content({ currentCity, setCurrentCity, favorites, setFavorites, temp}) {


  const [isLoading, setIsLoading] = useState(false);
  const [favorited, setFavorited] = useState(true);
  const [currentCityData, setCurrentCityData] = useState({
    city: "",
    country: "",
    temp: "",
    humidity: "",
    icon: "",
    description: "",
  });



  useEffect(() => {
    if (currentCity === "") {
      return;
    } else {
      setIsLoading((isLoading) => !isLoading);
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${process.env.REACT_APP_PHASE_2_PROJECT_API}`)

        .then((res) => res.json())
        .then((data) => {
          currentCityData.city = data.name;
          currentCityData.country = data.sys.country;
          currentCityData.temp = data.main.temp;
          currentCityData.humidity = data.main.humidity;
          currentCityData.icon = data.weather[0].icon;
          currentCityData.description = data.weather[0].description;
          setCurrentCityData({ ...currentCityData });
        })
        .then(setIsLoading((isLoading) => !isLoading))
        .then(() => {
          let data = JSON.parse(localStorage.getItem("cities"));
          if (data.some((e) => e.city === currentCityData.city)) {
            setFavorited(true);
          } else {
            setFavorited(false);
          }
        });
    }
  }, [currentCity]);

  let description = currentCityData.description;
  description = description
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");

  function favoriteClick() {
    if (!favorited) {
      setFavorited((favorited) => !favorited)
      let oldCities = JSON.parse(localStorage.getItem("cities"));
      let upperCaseCity = currentCity
      upperCaseCity = upperCaseCity
        .toLowerCase()
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
      let newCity = { city: upperCaseCity };
      let newObj = [...oldCities, newCity];
      localStorage.setItem("cities", JSON.stringify(newObj));
      let newFavorite = {city: upperCaseCity}
      let newFavorites = [...favorites, newFavorite]
      setFavorites([...newFavorites])
      } else {
      setFavorited((favorited) => !favorited)
      let oldCities = JSON.parse(localStorage.getItem("cities"))
      let upperCaseCity = currentCity;
      upperCaseCity = upperCaseCity
        .toLowerCase()
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
      let newCities = oldCities.filter((item) => item.city !== upperCaseCity)
      localStorage.setItem("cities", JSON.stringify(newCities))
      let newFavorites = favorites.filter((item) => item.city !== upperCaseCity)
      setFavorites([...newFavorites])

    }
  }

  function handleSearch(e) {
    e.preventDefault();
    setCurrentCity(e.target["default-search"].value);
    e.target.reset();
  }

  const [address, setAddress] = useState("");

  const handleChange = (value) => {
    setAddress(value);
  };

  const handleSelect = (
    address,
    placeId,
    suggestion,
  ) => {
    // Do something with address and placeId and suggestion
    setCurrentCity(suggestion.formattedSuggestion.mainText)
    setAddress("")
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >

      <div id="weatherContent">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <div id="content1">
              <div id="city">
                {currentCityData.city}, {currentCityData.country}
              </div>
              <img
                src={`http://openweathermap.org/img/wn/${currentCityData.icon}@2x.png`}
              ></img>
              <div style={{ marginTop: "-20px" }}>{description}</div>
            </div>
            <div id="content4">Temperature</div>
            <div id="content2">
              {temp==="F" ? ((currentCityData.temp - 273.15) * (9 / 5) + 32).toPrecision(3) : ((currentCityData.temp - 273.15).toPrecision(3))}
              {temp==="F" ? "°F" : "°C" }

            </div>
            <div id="content5">Humidity</div>
            <div id="content3">{currentCityData.humidity}%</div>
            <button onClick={favoriteClick} id="star">
              {favorited ? "★" : "✩"}
            </button>
          </>
        )}
      </div>
      <div id="searchBar">
        <PlacesAutocomplete
          value={address}
          onChange={handleChange}
          onSelect={handleSelect}
          searchOptions={{
            componentRestrictions: {
            },
            types: ["(cities)"],
          }}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div id="parent">
              <input
                {...getInputProps({
                  placeholder: "Search cities...",
                })}
              />
              <div id="suggestions">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const style = suggestion.active
                    ? { backgroundColor: "red", cursor: "pointer" }
                    : { backgroundColor: "white", cursor: "pointer" };

                  return (
                    <div {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    </div>
  );
}

export default Content;
