// components/Navigation.js
import React from "react";
import Link from "next/link";

import constants from "../constants";

export default function Navigation() {
  return (
    <nav className="bg-card text-white">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <ul className="flex items-center space-x-4 text-sm font-medium">
          {constants.NAV_LINKS.map((link, i) => (
            <li key={i}>
              <Link href={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
