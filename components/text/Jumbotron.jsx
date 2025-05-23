import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Jumbotron = ({ page, desc, pb_lg, pb_md }) => {
  const container = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
          },
          defaults: { duration: 0.5, stagger: 0.15, ease: "power2" },
        })
        .set(container.current, { opacity: 1 })
        .from(container.current.children, {
          x: "1em",
          opacity: 0,
        });
    },

    { scope: container, revertOnUpdate: true }
  );

  return (
    <section
      className={`jumbotron container-x ${
        pb_lg ? "!pb-[10em]" : pb_md ? "!pb-[6em] lg:!pb-[5.5em]" : ""
      }`}
    >
      <div
        ref={container}
        className="flex-center flex-col max-w-text !gap-1 text-center opacity-0"
      >
        <h2 className="">{page}</h2>
        <p className="">{desc}</p>
      </div>
    </section>
  );
};

export default Jumbotron;
