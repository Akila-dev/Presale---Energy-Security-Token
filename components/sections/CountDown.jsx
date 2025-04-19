import React, { useState, useEffect } from "react";

import { CardDiv } from "../../components";

const getTimeLeft = (time) => {
  const COUNTDOWN_TARGET = new Date(time);
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24)); //1000 stands for the number of a millisecd in a second
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);

  return { days, hours, minutes, seconds };
};

const Countdown = ({ time }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(time));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <CardDiv
      animation="slide-in"
      start="85%"
      once
      className="flex items-center justify-center gap-[0.7em] md:gap-2"
    >
      {Object.entries(timeLeft).map((el) => {
        const label = el[0];
        const value = el[1];

        return (
          <div
            key={label}
            className="gsap-countdown-card w-[5em] md:w-[6em] h-[4.75em] md:h-[5em] flex-center flex-col !gap-0 rounded gradient-border relative bg-bg px-1 "
          >
            <h3 className="font-semibold text-white">{value}</h3>
            <p className="sm uppercase -mt-[0.2em] text-fg border-t pt-1 border-fg/10 w-full">
              {label}
            </p>
          </div>
        );
      })}
    </CardDiv>
  );
};

export default Countdown;
