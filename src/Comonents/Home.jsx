import React from "react";
import banner from '../assets/banner2.jpg'
import img1 from '../assets/image1.jpg'
import img2 from '../assets/image2.avif'
import img3 from '../assets/image3.jpeg'
import img4 from '../assets/image4.jpg'

function Home() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <header className="relative">
        <div className="relative w-full h-screen">
          <img
            src={banner}
            alt="Cryptocurrency Background"
            className="absolute inset-0 w-full h-full object-cover opacity-100 blur-sm"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#ff8800] mb-4">
              Your ₿itcoins Hub
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl">
              Explore the secure and innovative world of digital currencies. 
              Stay informed, invest wisely, and embrace the future.
            </p>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
          <div className="flex flex-col items-center text-center w-full md:w-96">
            <img
              src={img1}
              alt="Bitcoin"
              className="rounded-lg mb-6 h-full"
            />
            <h3 className="text-xl font-semibold text-[#ff8800] mb-2">
              Bitcoin Simplified
            </h3>
            <p className="text-gray-400">
              Learn how Bitcoin works and why it's the foundation of the crypto revolution.
            </p>
          </div>
          <div className="flex flex-col items-center text-center w-full md:w-96">
            <img
              src={img2}
              alt="Blockchain"
              className="rounded-lg mb-6 h-full"
            />
            <h3 className="text-xl font-semibold text-[#ff8800] mb-2">
              Blockchain Technology
            </h3>
            <p className="text-gray-400">
              Discover the technology powering secure, decentralized transactions worldwide.
            </p>
          </div>
          <div className="flex flex-col items-center text-center w-full md:w-96">
            <img
              src={img3}
              alt="Wallet"
              className="rounded-lg mb-6 h-full"
            />
            <h3 className="text-xl font-semibold text-[#ff8800] mb-2">
              Secure Wallets
            </h3>
            <p className="text-gray-400">
              Manage your digital assets with advanced security and ease of access.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#ff8800] mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-extrabold text-white">1M+</h3>
              <p className="text-gray-400 mt-2">Users Worldwide</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-white">500+</h3>
              <p className="text-gray-400 mt-2">Coins Supported</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-white">24/7</h3>
              <p className="text-gray-400 mt-2">Customer Support</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-white">99.9%</h3>
              <p className="text-gray-400 mt-2">Transaction Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={img4}
              alt="Crypto Exchange"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#ff8800] mb-4">
              Empower Your Future
            </h3>
            <p className="text-gray-400">
              Join the cryptocurrency revolution. Trade, invest, and grow with confidence. 
              Our platform is built for both beginners and experts alike.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto text-center">
          <p className="text-[#ff8800]">
            © 2024 ₿itcoins Hub. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
