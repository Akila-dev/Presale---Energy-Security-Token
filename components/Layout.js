// components/Layout.js
import React from "react";
import { Navigation, Footer, Header } from "../components";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-bg text-gray-200">
      {/* Content */}
      <main className="flex-grow mt-[40vh]">{children}</main>
      {/* Sticky Header + Navigation */}
      <div className="fixed top-0 left-0 w-full">
        <Header />
        <Navigation />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
