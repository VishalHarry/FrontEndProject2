import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Header() {
  return (
    <nav className="w-full flex h-16 items-center justify-between px-6 bg-gradient-to-r from-black to-gray-900 text-white sticky top-0 left-0 right-0 z-50 shadow-lg">
      <h1 className="text-2xl font-bold text-white">
      ₿it<span className="text-[#ff8800]">Coin</span>
      </h1>

      {/* Desktop Menu */}
      <main className="hidden lg:flex w-[70%] justify-end gap-12">
        <HashLink
          className="hover:text-[#ff8800] transition-all duration-300"
          to={"/#home"}
        >
          Home
        </HashLink>
        <HashLink
          className="hover:text-[#ff8800] transition-all duration-300"
          to={"/coins"}
        >
          Coins
        </HashLink>
        <HashLink
          className="hover:text-[#ff8800] transition-all duration-300"
          to={"/exchanges"}
        >
        Exchanges
        </HashLink>
        <HashLink
          className="hover:text-[#ff8800] transition-all duration-300"
          to={"/coin/:id"}
        >
          CoinDetails
        </HashLink>
        
      </main>

      {/* Hamburger Menu */}
      <div className="lg:hidden flex flex-col justify-center items-end">
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <label
          htmlFor="menu-toggle"
          className="text-2xl text-white cursor-pointer"
        >
          <span className="block">☰</span>
        </label>

        {/* Mobile Menu */}
        <div className="peer-checked:flex hidden fixed top-0 left-0 h-[100%] w-[40%] bg-gradient-to-b from-black to-gray-800 text-white flex-col items-start p-6 gap-6 shadow-lg">
          <HashLink
            className="hover:text-[#ff8800] transition-all duration-300"
            to={"/#home"}
          >
            Home
          </HashLink>
          <HashLink
            className="hover:text-[#ff8800] transition-all duration-300"
            to={"/coins"}
          >
             Coins
          </HashLink>
          <HashLink
            className="hover:text-[#ff8800] transition-all duration-300"
            to={"/exchanges"}
          >
            Exchanges
          </HashLink>
          <HashLink
            className="hover:text-[#ff8800] transition-all duration-300"
            to={"/coin/:id"}
          >
            CoinDetails
          </HashLink>
         
        </div>
      </div>
    </nav>
  );
}

export default Header;
