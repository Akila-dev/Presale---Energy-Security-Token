import React from "react";

import { Heading, TeamCard, Button } from "../../components";
import text_data from "../../text_data";

const MeetTheTeam = ({ showAboutLink }) => {
  return (
    <div className="bg-dark rounded-md overflow-clip  pb-7">
      <div className="px-3 pt-7 md:px-7 pb-[8em] bg-card rounded-b-md">
        <Heading tag="Meet The Team" title="Our Visionaries" left />
      </div>
      <div className="gsap-card-group px-3 md:px-7 pb-7 -mt-12 grid-3">
        {text_data.TEAM_DATA.map(
          ({ name, role, img, position, education, experience }, i) => (
            <TeamCard
              key={i}
              name={name}
              role={role}
              img={img}
              position={position}
              education={education}
              experience={experience}
            />
          )
        )}
      </div>
      {showAboutLink && (
        <div className="flex-center">
          <Button
            href="/about"
            text="More About Us"
            className="btn-2 pt-5"
            icon="arrow-right"
          />
        </div>
      )}
    </div>
  );
};

export default MeetTheTeam;
