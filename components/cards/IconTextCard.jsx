import React from "react";

import { NeonGradientIcon } from "../../components";

const IconTextCard = ({ icon, title, desc, className }) => {
  return (
    <div className={`${className ? className : ""} gsap-card-single`}>
      <div className="w-full h-full bg-dark rounded py-4 px-3 md:p-4 flex-center flex-col backdrop-blur-lg text-justify border border-card">
        <div className="icon-box-icon text-gradient">
          <NeonGradientIcon icon={icon} />

          {/* {icon} */}
        </div>
        <h3 className="card-title text-center">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default IconTextCard;
