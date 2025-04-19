import React from "react";

import { Button, CardDiv } from "../../components";

const CTACard = ({ title, desc, buttons }) => {
  return (
    <div className="dark-gradient gradient-borde border border-fg/10 shadow-xl shadow-dark rounded">
      <div
        className="relative w-full h-full overflow-clip rounded bg-bottom bg-cover"
        style={{ backgroundImage: "url('/images/bg-lines.png')" }}
      >
        <div className="light-gradient absolute w-[30vw] h-[30vw] -top-3/4 left-1/2 -translate-x-1/2 rounded-full opacity-30 blur-3xl" />
        <CardDiv
          animation="slide-in"
          start="85%"
          className="px-3 py-5 lg:p-10 flex-center flex-col !items-start md:!items-center gap-2 md:text-center backdrop-blur-sm"
        >
          <h2 className="capitalize max-w-text">{title}</h2>
          <p className="max-w-text">{desc}</p>
          <div className="flex-v-center flex-col md:flex-row pt-1">
            {buttons.map((button, i) => (
              <Button
                key={i}
                href={button.href}
                text={button.text}
                className={i % 2 == 0 ? "btn-2" : "btn-1"}
              />
            ))}
          </div>
        </CardDiv>
      </div>
    </div>
  );
};

export default CTACard;
