import React, { useState } from "react";
import Chart from "./Chart";

const CoinDetails = () => {
  // Temporary coin data
  const coin = {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    image: {
      large: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
    },
    market_data: {
      current_price: { inr: 3600000, usd: 44000, eur: 41000 },
      high_24h: { inr: 3650000, usd: 45000, eur: 42000 },
      low_24h: { inr: 3550000, usd: 43000, eur: 40000 },
      price_change_percentage_24h: 2.5,
      market_cap: { inr: 68000000000000, usd: 900000000000, eur: 850000000000 },
      max_supply: 21000000,
      circulating_supply: 19000000,
      ath: { inr: 5000000, usd: 60000, eur: 58000 },
      atl: { inr: 200, usd: 1, eur: 1 },
      last_updated: new Date().toISOString(),
    },
    market_cap_rank: 1,
  };

  // Temporary chart data
  const chartArray = [
    [Date.now() - 6 * 24 * 60 * 60 * 1000, 3400000], // 6 days ago
    [Date.now() - 5 * 24 * 60 * 60 * 1000, 3450000], // 5 days ago
    [Date.now() - 4 * 24 * 60 * 60 * 1000, 3500000], // 4 days ago
    [Date.now() - 3 * 24 * 60 * 60 * 1000, 3550000], // 3 days ago
    [Date.now() - 2 * 24 * 60 * 60 * 1000, 3580000], // 2 days ago
    [Date.now() - 1 * 24 * 60 * 60 * 1000, 3600000], // 1 day ago
    [Date.now(), 3600000], // Today
  ];

  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];

  const switchChartStats = (key) => {
    setDays(key);
  };

  return (
    <div className=" mx-auto p-4 bg-gray-800 text-white">
      <>
        {/* Chart Section */}
        <div className="w-full border p-4 mb-4 bg-gray-900 rounded-lg shadow-lg">
          <Chart arr={chartArray} currency={currencySymbol} days={days} />
        </div>

        {/* Button Group */}
        <div className="flex space-x-2 overflow-x-auto p-4">
          {btns.map((i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-lg transition duration-300 ease-in-out transform ${
                days === i
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-600 hover:bg-gray-500"
              } text-white`}
              onClick={() => switchChartStats(i)}
            >
              {i}
            </button>
          ))}
        </div>

        {/* Currency Radio Buttons */}
        <div className="flex space-x-4 p-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="inr"
              checked={currency === "inr"}
              onChange={(e) => setCurrency(e.target.value)}
              className="form-radio text-blue-500"
            />
            <span>INR</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="usd"
              checked={currency === "usd"}
              onChange={(e) => setCurrency(e.target.value)}
              className="form-radio text-blue-500"
            />
            <span>USD</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="eur"
              checked={currency === "eur"}
              onChange={(e) => setCurrency(e.target.value)}
              className="form-radio text-blue-500"
            />
            <span>EUR</span>
          </label>
        </div>

        {/* Coin Details Section */}
        <div className="flex flex-col space-y-4 p-8 bg-gray-900 rounded-lg shadow-lg">
          <p className="text-sm text-center text-gray-400">
            Last Updated On {new Date(coin.market_data.last_updated).toLocaleString()}
          </p>
          <img
            src={coin.image.large}
            alt={coin.name}
            className="w-16 h-16 mx-auto"
          />
          <div>
            <h2 className="text-3xl font-bold text-center">{coin.name}</h2>
            <p className="text-xl text-center">
              {currencySymbol}
              {coin.market_data.current_price[currency]}
            </p>
            <p className="text-lg text-center">
              {coin.market_data.price_change_percentage_24h > 0 ? (
                <span className="text-green-500">▲</span>
              ) : (
                <span className="text-red-500">▼</span>
              )}
              {coin.market_data.price_change_percentage_24h}%
            </p>
          </div>
          <div className="text-center">
            <span className="text-2xl bg-black text-white p-2 rounded-full">
              #{coin.market_cap_rank}
            </span>
          </div>
          <CustomBar
            high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
            low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
          />
          <div className="w-full space-y-2">
            <Item
              title="Max Supply"
              value={coin.market_data.max_supply || "N/A"}
            />
            <Item
              title="Circulating Supply"
              value={coin.market_data.circulating_supply}
            />
            <Item
              title="Market Cap"
              value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}
            />
            <Item
              title="All Time Low"
              value={`${currencySymbol}${coin.market_data.atl[currency]}`}
            />
            <Item
              title="All Time High"
              value={`${currencySymbol}${coin.market_data.ath[currency]}`}
            />
          </div>
        </div>
      </>
    </div>
  );
};

const Item = ({ title, value }) => (
  <div className="flex justify-between w-full text-gray-400">
    <span className="font-bold">{title}</span>
    <span>{value}</span>
  </div>
);

const CustomBar = ({ high, low }) => (
  <div className="w-full">
    <div className="h-2 bg-teal-400 rounded mb-2"></div>
    <div className="flex justify-between text-sm text-gray-400">
      <span className="text-red-500">{low}</span>
      <span>24H Range</span>
      <span className="text-green-500">{high}</span>
    </div>
  </div>
);

export default CoinDetails;
