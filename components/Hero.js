// components/Hero.js
import { useRef } from "react";

import { Button, CountDown, TextDiv } from "../components";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef();
  // Animation
  //   useGSAP(() => {
  //     const tl = gsap.timeline()

  //     tl.to()
  // },{ scope: container });

  return (
    <div
      className="relative w-full h-screen text-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div
        className="absolute top-0 left-0 w-full h-[65%] object-cover bg-bottom bg-opacity-50"
        style={{ backgroundImage: "url('/images/bg-lines.png')" }}
      />
      <div className="radial-dark-overlay w-full h-full flex-center">
        <TextDiv
          ref={container}
          className="gsap-hero-container container-x max-w-full md:max-w-[90vw] lg:max-w-[65vw] relative flex-center flex-col !gap-3 pt-6 lg:pt-10"
        >
          <h1 className="uppercase gsap-hero-h1">
            Energy <span>Security</span> Token
          </h1>
          <p className="md:max-w-[80%] gsap-hero-p">
            Lorem ipsum dolor sit amet. Qui dolores dicta qui rerum culpa sed
            magni eligendi eum corrupti atque aut dolorem architecto quo velit
            repellendus et incidunt autem.
          </p>
          <Button text="Join Presale" href="/presale" icon="arrow-right" />
          <div className="flex-center mt-1">
            <CountDown time="2025-04-21T06:20:35" />
          </div>
        </TextDiv>
      </div>
    </div>
  );
}
