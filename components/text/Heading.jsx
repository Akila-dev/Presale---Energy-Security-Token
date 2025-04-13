import React from "react";

const Heading = ({ tag, title, desc, left }) => {
  return (
    <div
      className={`gsap-single-card flex-center ${
        left ? "!justify-start" : "!justify-center"
      }`}
    >
      <div
        className={`flex-center flex-col max-w-text ${
          left ? "!items-start text-left" : "!items-center text-center"
        }`}
      >
        <div className="dark-gradient py-1 px-2 rounded border border-dark">
          <p className="uppercase text-gradient font-semibold">{tag}</p>
        </div>
        <h2>{title}</h2>
        {desc && <p>{desc}</p>}
      </div>
    </div>
  );
};

export default Heading;
