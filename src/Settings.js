import React from 'react'

function Settings({handleTemp, temp}) {


  return (
    <div>
      <div>Settings</div>
      <div>
      <button onClick={handleTemp}>{temp==="F" ? "°F" : "°C" }</button>
      </div>
      </div>
  )
}

export default Settings