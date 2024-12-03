import React from 'react';

function Options() {
  return (
    <div>
      <div className="flex items-center space-x-8 p-6 bg-gradient-to-r from-black via-blue-950 to-sky-900 shadow-lg w-full h-12 pt-5">
   
        <div className="flex items-center space-x-2">
          <input 
            type="radio" 
            id="option1" 
            name="options" 
            className="h-6 w-6 text-blue-500 focus:ring-2 focus:ring-blue-500 cursor-pointer transition duration-200"
          />
          <label htmlFor="option1" className="text-lg text-gray-200 font-semibold">Option 1</label>
        </div>
 
        <div className="flex items-center space-x-2">
          <input 
            type="radio" 
            id="option2" 
            name="options" 
            className="h-6 w-6 text-blue-500 focus:ring-2 focus:ring-blue-500 cursor-pointer transition duration-200"
          />
          <label htmlFor="option2" className="text-lg text-gray-200 font-semibold">Option 2</label>
        </div>
  
        <div className="flex items-center space-x-2">
          <input 
            type="radio" 
            id="option3" 
            name="options" 
            className="h-6 w-6 text-blue-500 focus:ring-2 focus:ring-blue-500 cursor-pointer transition duration-200"
          />
          <label htmlFor="option3" className="text-lg text-gray-200 font-semibold">Option 3</label>
        </div>
      </div>
    </div>
  );
}

export default Options;
