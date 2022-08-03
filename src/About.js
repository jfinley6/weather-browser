import React from 'react'

function About() {
  return (
    <div>
      <h1>About</h1>
      <ul className="list-disc">Welcome to our Weather App built with React!
        <li>Search our database of cities across the globe for daily weather updates.</li>
        <li>Our handy favorites feature allows you to pin your cities for quicker viewing.</li>
        <li>Got too many favorite places around the world? Narrow them down through our favorites search-bar functionality.</li>
        <li>For those that want to check temperatures in the middle of the night, give your eyes a break with our Dark Mode feature under the settings tab.</li>
        <li>Metric or Impercial, we don't discriminate! Toggle your preferred units of measurement between celsius and fahrenheit.</li>
        </ul>
      </div>
  )
}

export default About