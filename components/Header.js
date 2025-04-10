// components/Header.js
import React from "react";
import { Logo } from "../components";

export default function Header() {
  return (
    <header className="bg-bg bg-opacity-80 backdrop-blur sticky top-0 z-50 shadow-neon">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-2">
          <Logo />
        </div>
        <div>
          <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-md shadow-neon transition-all duration-300">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
}
