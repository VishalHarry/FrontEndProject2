import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '../main'; 
import Loader from './Loader';
import CoinBox from './CoinBox';
import ErrorHandle from './ErrorHandle';


function Exchanges() {
  const [exchanges, setExchanges] = useState([]); 
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        console.log(data);//
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);  // Show error message if there's an error
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchData();
  }, []);
  if(error) return <ErrorHandle/>;

  

  return (
    <div className="h-auto w-full bg-gradient-to-r from-black via-blue-950 to-sky-900 flex flex-wrap gap-5 p-10  justify-evenly  ">
      {loading ? (
        <Loader />
      ) : (
        exchanges.map((exchange) => (
         <CoinBox key={exchange.id} name={exchange.name} img={exchange.image} rank={exchange.trust_score_rank}  url={exchange.url}   />
        ))
      )}
    </div>
  );
}

export default Exchanges;
