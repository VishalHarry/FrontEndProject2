import React from 'react'

function CoinBox({name,img,rank,url}) {
  return (
    <a
        href={url} target='blank'
        className="h-56 w-44 ml-5 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center gap-3 hover:scale-105 hover:shadow-2xl transition ease-out duration-300"
      >
       
        <img
          src={img}
          alt="Placeholder"
          className="h-20 w-20 rounded-full object-cover"
        />
       
        <h1 className="text-lg font-semibold text-gray-800">{name}</h1>
       
        <p className="text-sm text-gray-600 text-center">
         Rank:{rank}
        </p>
      </a>
  )
}

export default CoinBox
