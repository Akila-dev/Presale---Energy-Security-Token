import React from "react";

const Heading = ({ tag, title, desc }) => {
  return (
    <div className="gsap-single-card flex-center">
      <div className="flex-center flex-col text-center max-w-text">
        <div className="dark-gradient py-1 px-2 rounded">
          <p className="uppercase text-gradient font-semibold">{tag}</p>
        </div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Heading;
