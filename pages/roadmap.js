import React from "react";

import {
  Layout,
  Jumbotron,
  Heading,
  Roadmap as RoadmapComponent,
} from "../components";
import text_data from "../text_data";

export default function Roadmap() {
  return (
    <Layout>
      {/* Jumbotron */}
      <Jumbotron page="Roadmap" desc="Roadmap to Success" />

      <section className="container flex-center flex-col !gap-5 md:-mt-5">
        <Heading
          tag="Roadmap"
          title="Roadmap"
          desc={`<span>Our development roadmap</span> outlines the detailed progression through
          strategic milestones, clearly defined phases, and measurable goals,
          guiding us towards building a decentralized renewable energy ecosystem
          powered by the ERGSEC security token.`}
        />
        <RoadmapComponent data={text_data.ROADMAP_DATA} />
      </section>
    </Layout>
  );
}
