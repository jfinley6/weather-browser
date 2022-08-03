import React, { useState, useEffect } from "react";

function Content({ currentCity }) {
  const [isLoading, setIsLoading] = useState(false);
  const [favorited, setFavorited] = useState(false)
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
      setIsLoading((isLoading) => !isLoading)
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=`
      )
        .then((res) => res.json())
        .then((data) => {
          currentCityData.city = data.name;
          currentCityData.country = data.sys.country;
          currentCityData.temp = data.main.temp;
          currentCityData.humidity = data.main.humidity;
          currentCityData.icon = data.weather[0].icon;
          currentCityData.description = data.weather[0].description
          setCurrentCityData({ ...currentCityData });
        })
        .then(setIsLoading((isLoading) => !isLoading));
    }
    setFavorited((favorited) => !favorited)

  }, [currentCity]);

let description = currentCityData.description;
description = description
  .toLowerCase()
  .split(" ")
  .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
  .join(" ");  

  function favoriteClick() {
    setFavorited((favorited) => !favorited)
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <form style={{ width: "300px" }}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for City..."
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
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
              <div style={{marginTop: "-20px"}}>{description}</div>
            </div>
            <div id="content4">Temperature</div>
            <div id="content2">
              {((currentCityData.temp - 273.15) * (9 / 5) + 32).toPrecision(3)}
              °F
            </div>
            <div id="content5">Humidity</div>
            <div id="content3">{currentCityData.humidity}%</div>
            <button onClick={favoriteClick} id="star">{favorited ? "★" : "✩"}</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Content;
