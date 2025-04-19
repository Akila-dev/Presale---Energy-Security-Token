import React from "react";

import {
  Layout,
  MeetTheTeam,
  Heading,
  Jumbotron,
  TextDiv,
} from "../components";

export default function About() {
  return (
    <Layout>
      {/* Jumbotron */}
      <Jumbotron page="About" desc="Project Overview" />

      {/* Mission & Vision Section */}
      <section className="container grid-2-v2">
        <div className="col-span-1 md:col-span-3">
          <Heading tag="Our Mission" title="Mission & Vision" left />
        </div>
        <TextDiv className="col-span-1 md:col-span-4 lg:text-[1.2em] flex flex-col gap-2">
          <span>
            Our mission is to accelerate the global transition to sustainable
            energy by providing transparent, secure, and accessible investment
            opportunities.
          </span>
          <span>
            Through the issuance of the Energy Security Token (ERGSEC), we
            empower investors to directly participate in pioneering renewable
            energy projects, driving both environmental progress and economic
            growth.
          </span>
        </TextDiv>
      </section>

      {/* Team & Advisors Section */}
      <section className="container-x">
        <MeetTheTeam />
      </section>

      {/* Partnerships Section */}
      <section className="container">
        <Heading
          tag="Our Partners"
          title="Partnerships"
          desc="We partner with leading organizations in renewable energy and
            blockchain technology to drive sustainable growth, improve ESG
            outcomes, and ensure secure, transparent profit distribution."
        />
      </section>
    </Layout>
  );
}
