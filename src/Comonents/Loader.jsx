import React from 'react'

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-black via-blue-950 to-sky-400">
      {/* Central Circle */}
      <div className="relative h-32 w-32 flex justify-center items-center rounded-full bg-gray-800">
        
        {/* Animated Bitcoin Logo moving in a circular path */}
        <div className="absolute h-16 w-16 animate-spin-slow">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"
            alt="Bitcoin Logo"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Loader
