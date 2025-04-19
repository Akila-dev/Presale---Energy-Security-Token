// components/Footer.js
import React from "react";
import Link from "next/link";

import { Logo, CardDiv, SocialIcons } from "../components";
import text_data from "../text_data";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactSection = () => (
  <div className="footer-group">
    <h4>Contact</h4>
    <CardDiv
      animation="slide-in"
      once
      start="90%"
      className="flex flex-col gap-2"
    >
      <Link
        className="flex-v-center footer-link"
        href={`mailto:${text_data.CONTACT_DETAILS.mail}`}
      >
        <FaEnvelope className="text-neon min-w-[1.5em] scale-125" />{" "}
        {text_data.CONTACT_DETAILS.mail}
      </Link>
      <Link
        className="flex-v-center footer-link"
        href={`tel:${text_data.CONTACT_DETAILS.phone}`}
      >
        <FaPhoneAlt className="text-neon min-w-[1.5em]" />{" "}
        {text_data.CONTACT_DETAILS.phone}
      </Link>
    </CardDiv>
    <SocialIcons />
  </div>
);

export default function Footer() {
  return (
    <footer className="">
      <div className="container dark-gradient-2 flex flex-col lg:flex-row gap-5 lg:gap-12 !pt-8 !pb-5 border-y-[0.1em] border-card/10">
        <CardDiv
          animation="slide-in"
          once
          start="90%"
          className=" md:col-span-2 footer-group lg:min-w-[23vw] lg:max-w-[25vw]"
        >
          <div className="flex">
            <Logo />
          </div>
          <p className="">
            Become part of a community committed to quality and excellence. Our
            mission is to accelerate the global transition to sustainable energy
            by providing transparent, secure, and accessible investment
            opportunities.
          </p>
        </CardDiv>
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 w-full gap-5">
          {/* MAIN NAV */}
          <CardDiv
            animation="slide-in"
            once
            start="90%"
            className="footer-group"
          >
            <h4>Navigation</h4>
            {text_data.MOBILE_MAIN_NAV.map(({ url, label }, i) => (
              <Link key={i} href={url} className="footer-link">
                {label}
              </Link>
            ))}
          </CardDiv>
          {/* DOCUMENTATIONS */}
          <CardDiv
            animation="slide-in"
            once
            start="90%"
            className="footer-group"
          >
            <h4>Documentation</h4>
            {text_data.MOBILE_NAV_FOOTER.map(({ url, label }, i) => (
              <Link key={i} href={url} className="footer-link">
                {label}
              </Link>
            ))}
          </CardDiv>

          <div className="hidden md:flex lg:hidden">
            <ContactSection />
          </div>
        </div>

        <div className=" md:col-span-2 flex md:hidden lg:flex">
          <ContactSection />
        </div>
      </div>

      <div className="text-center !bg-black py-3">
        Xxxx xxx xxxx. © 2025 - All rights reserved.
      </div>
    </footer>
  );
}
