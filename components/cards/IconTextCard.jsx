import React from "react";
import { MdOutlineHandshake } from "react-icons/md";

const IconTextCard = ({ icon, title, desc, className }) => {
  return (
    <div className={`${className ? className : ""} gsap-card-single`}>
      <div className="w-full h-full bg-dark rounded py-4 px-3 md:p-4 flex-center flex-col backdrop-blur-lg text-justify border border-card">
        <div className="h2 text-gradient">
          <svg width="1em" height="1em">
            <linearGradient
              id="neon-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="var(--neon-from)" offset="0%" />
              <stop stopColor="var(--neon-via)" offset="50%" />
              <stop stopColor="var(--neon-to)" offset="100%" />
            </linearGradient>

            {icon}
          </svg>

          {/* {icon} */}
        </div>
        <h3 className="card-title text-center">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default IconTextCard;
