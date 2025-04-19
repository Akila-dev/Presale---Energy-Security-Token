// components/Navbar.js
import { useState, useRef } from "react";
import Link from "next/link";

import { SiMaildotru } from "react-icons/si";
import { Logo, Navigation, MenuButton, MenuPopup, SocialIcons } from ".";
import text_data from "../text_data";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const container = useRef();
  const menuContainer = useRef();

  // CLOSE MENU FUNCTION
  const { contextSafe } = useGSAP({ scope: menuContainer });
  const closeMenu = contextSafe(() => {
    gsap.to(".gsap-menu-container", {
      xPercent: -100,
      duration: 0.75,
      stagger: 0.175,
      ease: "power2.out",
      onComplete: () => setShowMenu(false),
    });
  });

  return (
    <>
      <header
        ref={container}
        className="fixed top-0 left-0  w-full !bg-bg border-b-[0.1em] border-fg/10 shadow shadow-card/50 z-[10000]"
      >
        <div className="container-x py-2 lg:py-3 flex-between lg:border-b-[0.1em] lg:border-fg/10 text-white">
          <div className="flex-1 show-md">
            <Link
              href={`mailto:${text_data.CONTACT_DETAILS.mail}`}
              className="flex-v-center !gap-1 font-semibold"
            >
              <SiMaildotru />
              <span>24/7</span>
              <span>{text_data.CONTACT_DETAILS.mail}</span>
            </Link>
          </div>
          <div className="flex-center !justify-start md:!justify-center flex-1">
            <Logo />
          </div>
          <div className="flex-1 flex justify-end show-lg">
            <SocialIcons small />
          </div>
          <div className="flex-1 flex justify-end hide-lg">
            <MenuButton onClick={() => setShowMenu(true)} />
          </div>
        </div>
        <div className="show-lg">
          <Navigation />
        </div>
      </header>
      {/* Show Mobile Menu */}
      {showMenu && (
        <MenuPopup close={() => closeMenu()} container={menuContainer} />
      )}
    </>
  );
}
