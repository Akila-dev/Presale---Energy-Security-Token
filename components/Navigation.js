// components/Navigation.js
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { RxArrowTopRight } from "react-icons/rx";
import { TbChevronDown } from "react-icons/tb";
import text_data from "../text_data";

const MenuLink = ({ url, label, subLinks }) => {
  const [showingSublinks, setShowingSublinks] = useState(false);
  const pathname = usePathname();

  return (
    <li className="relative">
      {subLinks ? (
        <>
          <button
            className={` font-medium flex-v-center !gap-1 uppercase ${
              pathname.includes(url) ? "text-neon" : ""
            }`}
            onClick={() => setShowingSublinks((prev) => !prev)}
          >
            {label}
            <TbChevronDown
              className={`scale-110 transform-700 ${
                showingSublinks ? "rotate-180" : ""
              }`}
            />
          </button>
          {showingSublinks && (
            <div className="menu-sublinks-container absolute top-[3em] left-[50%] -translate-x-1/2 w-full min-w-[35em] bg-bg p-2 rounded-md border border-fg/10">
              <ul className="grid grid-cols-2 gap-x-2 gap-y-1 w-full">
                {subLinks.map((subLink, j) => (
                  <li key={j} className="col-span-1 menu-sublinks">
                    <Link
                      href={`${url}${subLink.url}`}
                      className={` font-medium flex-v-center hover:bg-card p-1 rounded ${
                        pathname === `${url}${subLink.url}` ? "bg-card" : ""
                      }`}
                    >
                      <div
                        className={`flex-center p-2 bg-none rounded border-[0.1em] border-white`}
                      >
                        <RxArrowTopRight className="scale-150" />
                      </div>{" "}
                      {subLink.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <Link
          href={url}
          className={`font-medium hover:text-neon ${
            pathname === url ? "text-gradient" : ""
          }`}
        >
          {label}
        </Link>
      )}
    </li>
  );
};

export default function Navigation() {
  return (
    <nav className="text-white w-full container-x py-2">
      <ul className="flex-between !gap-1 uppercase">
        {text_data.NAV_LINKS.map((link, i) => (
          <MenuLink
            key={i}
            url={link.url}
            label={link.label}
            subLinks={link.subLinks}
          />
        ))}
      </ul>
    </nav>
  );
}
