import React from 'react'
import { Link } from 'react-router-dom'

function CoinCard({id,name,img,symbol,price,currencySymbol="₹"}) {
  return (
    <Link
        to={`/coin/${id}`} 
        className="h-56 w-44 ml-5 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center gap-3 hover:scale-105 hover:shadow-2xl transition ease-out duration-300"
      >
       
        <img
          src={img}
          alt="Placeholder"
          className="h-20 w-20 rounded-full object-cover"
        />
       
        <h1 className="text-lg font-semibold text-gray-800">{symbol}</h1>
       
        <h2 className="text-sm text-gray-600 text-center">
        {name}
        </h2>
        <h2 className="text-sm text-gray-600 text-center">
         {price?`${currencySymbol}${price}`:"NA"}
        </h2>
      </Link>
  )
}

export default CoinCard
