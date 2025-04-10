// components/Hero.js
import React from "react";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden bg-cover bg-center"
         style={{ backgroundImage: "url('/images/hero-background.webp')" }}>
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white animate-fade-in">
          Xxxx xxx xxxx.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 animate-fade-in">
          Xxxx xxx xxxx. Xxxx xxx xxxx.
        </p>
        <button className="mt-6 px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 
                           hover:from-pink-600 hover:to-purple-600 font-medium text-white 
                           transition-all duration-300 shadow-neon animate-pulse">
          Join Presale
        </button>
      </div>
    </div>
  );
}
