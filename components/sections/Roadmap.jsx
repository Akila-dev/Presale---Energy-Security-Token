import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const RoadmapCard = ({ date, label, description, list }) => (
  <div className="bg-dark/50 rounded border-[0.1em] border-dark max-w-[25em] p-2 md:p-3 space-y-1">
    <h4 className="text-gradient inner-block">{date}</h4>
    <h4>{label}</h4>
    <p dangerouslySetInnerHTML={{ __html: description }} />
    <ul>
      {list.map((item, j) => (
        <li
          key={j}
          className="list-disc ml-2"
          dangerouslySetInnerHTML={{ __html: item }}
        />
      ))}
    </ul>
  </div>
);

const Roadmap = ({ data }) => {
  const container = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      // ANIMATIONS TRIGGERED BY THE CONTAINER
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top 50%",
            end: "bottom 50%",
            scrub: 0.2,
          },
          defaults: { ease: "none" },
        })
        .to(".gsap-timeline-neon-line", {
          height: "100%",
          ease: "none",
        });
    },
    { scope: container, revertOnUpdate: true }
  );

  return (
    <div
      ref={container}
      className="grid-2 w-full md:!gap-x-[8em] lg:!gap-x-[12em] !gap-y-4 md:gap-y-2 relative py-3 md:py-12 pl-3 md:pl-0"
    >
      {/* LINES & TOP&BOTTOM DOTS */}
      <div className="timeline-line-pos w-[0.1em] h-full bg-card" />{" "}
      {/* LINE BELOW */}
      <div className="gsap-timeline-neon-line timeline-line-pos w-[0.1em] h-0 bg-neon" />{" "}
      {/* LINE NEON */}
      <div className={`timeline-dot hidden md:block timeline-line-pos`} />{" "}
      {/* TOP DOT */}
      <div
        className={`timeline-dot hidden md:block timeline-line-pos !top-full`}
      />{" "}
      {/* BOTTOM DOT */}
      {/* TIMELINE */}
      {data.map((item, i) => (
        <div
          key={i}
          className={`relative ${
            i % 2 ? "md:mt-[35%] md:place-items-start" : "md:place-items-end"
          }`}
        >
          <RoadmapCard
            date={item.date}
            label={item.label}
            description={item.description}
            list={item.list}
          />
          <div
            className={`timeline-dot absolute top-3 ${
              i % 2
                ? "left-[--timeline-dis] md:top-[20%]"
                : "left-[--timeline-dis] md:hidden"
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default Roadmap;
