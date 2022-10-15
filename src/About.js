import React from "react";

function About() {
  return (
    <div id="about">
      <h1>Welcome to our Weather App built with React!</h1>
      <div id="list" className="font-bold">
        <li>
          Search our database of cities across the United States for current weather conditions.
        </li>
        <li>
          Our handy favorites feature allows you to pin your cities for quicker
          viewing.
        </li>
        <li>
          Have a lot of favorites saved? Narrow them down
          through our favorites search-bar functionality.
        </li>
        <li>
          Metric or Imperial, we don't discriminate! Toggle your preferred
          units of measurement between celsius and fahrenheit.
        </li>
      </div>
      <div>
        <div style={{ fontWeight: "bold", marginTop: "5px" }}>
          Github Repository
        </div>
        <a
          href="https://github.com/jfinley6/phase-2-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i id="icon" className="fa-brands fa-4x fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default About;
