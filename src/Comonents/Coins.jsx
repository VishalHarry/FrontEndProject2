import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '../main'; 
import Loader from './Loader';
import CoinCard from './CoinCard';
import ErrorHandle from './ErrorHandle';

function Exchanges() {
  const [exchanges, setExchanges] = useState([]); 
  const [currency, setCurrency] = useState("inr"); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : currency === "usd" ? "$" : "";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btn = new Array(132).fill(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [currency, page]);

  if (error) return <ErrorHandle />;

  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
  };

  return (
    <>
      <div>
        <div className="flex items-center space-x-8 p-6 bg-gradient-to-r from-black via-blue-950 to-sky-900 shadow-lg w-full h-12 pt-5">
          {/* INR Radio Button */}
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="inr"
              name="currency"
              checked={currency === "inr"}
              onChange={() => handleCurrencyChange("inr")}
              className="h-6 w-6 text-blue-500 focus:ring-2 focus:ring-blue-500 cursor-pointer transition duration-200"
            />
            <label htmlFor="inr" className="text-lg text-gray-200 font-semibold">₹INR</label>
          </div>

          {/* EUR Radio Button */}
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="eur"
              name="currency"
              checked={currency === "eur"}
              onChange={() => handleCurrencyChange("eur")}
              className="h-6 w-6 text-blue-500 focus:ring-2 focus:ring-blue-500 cursor-pointer transition duration-200"
            />
            <label htmlFor="eur" className="text-lg text-gray-200 font-semibold">€EUR</label>
          </div>

          {/* USD Radio Button */}
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="usd"
              name="currency"
              checked={currency === "usd"}
              onChange={() => handleCurrencyChange("usd")}
              className="h-6 w-6 text-blue-500 focus:ring-2 focus:ring-blue-500 cursor-pointer transition duration-200"
            />
            <label htmlFor="usd" className="text-lg text-gray-200 font-semibold">$USD</label>
          </div>
        </div>

        <div className="h-auto w-full bg-gradient-to-r from-black via-blue-950 to-sky-900 flex flex-wrap justify-evenly gap-5 p-6 md:p-10">
          {loading ? (
            <Loader />
          ) : (
            exchanges.map((exchange) => (
              <CoinCard 
                key={exchange.id} 
                id={exchange.id} 
                name={exchange.name} 
                img={exchange.image} 
                price={exchange.current_price} 
                symbol={exchange.symbol} 
                currencySymbol={currencySymbol} 
              />
            ))
          )}
        </div>

        <div className='w-full h-auto bg-gradient-to-r from-black via-blue-950 to-sky-900 p-6 md:p-10 flex justify-center gap-2 overflow-x-auto'>
          {btn.map((item, ind) => (
            <button 
              key={ind} 
              onClick={() => changePage(ind + 1)} 
              className='px-4 py-2 bg-sky-700 text-white rounded-md transition duration-200 hover:bg-sky-600'>
              {ind + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Exchanges;
