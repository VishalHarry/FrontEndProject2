import React from 'react'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import Header from './Comonents/Header'
import Home from './Comonents/Home'
import Coins from './Comonents/Coins'
import Exchanges from './Comonents/Exchanges'
import CoinDetails from './Comonents/CoinDetails'
import Options from './Comonents/Options'


function App() {
  return (
   
   <Router>
    <Header/>
    
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/coins' element={<Coins/>} />
    <Route path='/exchanges' element={<Exchanges/>} />
    <Route path='/coin/:id' element={<CoinDetails/>} />

     
    </Routes>
   </Router>
  )
}

export default App
