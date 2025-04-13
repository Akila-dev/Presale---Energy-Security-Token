import React from "react";
import Image from "next/image";

const TeamCard = ({ img, name, position, education, experience }) => {
  return (
    <div className="gsap-card-single space-y-3 p-3 dark-gradient rounded-lg shadow shadow-card">
      {/* Image */}

      <Image
        src={img}
        alt={name}
        width={350}
        height={350}
        className="w-full h-[18em] lg:h-[22em] object-cover rounded-md"
      />
      {/* Text */}
      <div className="flex flex-col gap-1 items-start">
        <div className="flex-v-center flex-wrap">
          <h4>{name}</h4>
          <p className="tag">{position}</p>
        </div>
        <p>
          {education}, {experience}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
