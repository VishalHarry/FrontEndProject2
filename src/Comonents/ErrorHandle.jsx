import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

function ErrorHandle() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-black via-blue-950 to-sky-900">
      {/* 404 Container */}
      <div className="flex flex-col justify-center items-center text-center text-white space-y-6">
        
        {/* Animated 404 Text */}
        <h1 className="text-9xl font-bold animate-bounce">404</h1>

        {/* Error Message */}
        <p className="text-2xl font-semibold animate-fadeIn">Oops! Page Not Found</p>

        {/* Oops Icon Animated */}
        <div className="flex justify-center gap-4 mt-6">
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className="text-white text-6xl animate-bounce"
          />
        </div>

        {/* Back to Home Button */}
        <a
          href="/"
          className="mt-6 px-6 py-2 bg-indigo-600 rounded-lg text-xl font-semibold text-white hover:bg-indigo-700 transition-all duration-300 animate-pulse"
        >
          Go Back Home
        </a>
      </div>
    </div>
  )
}

export default ErrorHandle
