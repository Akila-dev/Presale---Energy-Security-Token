import React from "react";

import { TextDiv } from "../../components";

const Heading = ({ tag, title, desc, left }) => {
  return (
    <div
      className={`gsap-single-card flex-center !justify-start ${
        left ? "md:!justify-start" : "md:!justify-center"
      }`}
    >
      <TextDiv
        className={`flex-center flex-col max-w-text !items-start text-left ${
          left
            ? "md:!items-start !text-left"
            : "md:!items-center md:!text-center"
        }`}
      >
        {tag && (
          <div className="dark-gradient py-1 px-2 rounded border border-dark">
            <p className="uppercase text-gradient font-semibold">{tag}</p>
          </div>
        )}
        <h2 className="">{title}</h2>
        {desc && <p>{desc}</p>}
      </TextDiv>
    </div>
  );
};

export default Heading;
