import React from 'react'

function Settings({handleTemp, temp}) {


  return (
    <div>
      <div className='mt-10 text-6xl'>Temperature Units</div>
      <div>
        <button
          className="mt-10 text-6xl h-32 w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleTemp}
        >
          {temp === "F" ? "°F" : "°C"}
        </button>
      </div>
    </div>
  );
}

export default Settings