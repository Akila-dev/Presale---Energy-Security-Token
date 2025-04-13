// pages/index.js
import React from "react";

import {
  Layout,
  Hero,
  Heading,
  IconTextCard,
  CTACard,
  ContactCTACard,
} from "../components";
import text_data from "../text_data";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />
      {/* Additional content below Hero */}
      <section className="container space-y-5">
        <Heading
          tag="Why Choose Us"
          title="Why Choose Our Project?"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <div className="gsap-card-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full items-stretch">
          {text_data.WHY_CHOOSE_US.map(({ icon, title, desc }, i) => (
            <IconTextCard key={i} icon={icon} title={title} desc={desc} />
          ))}
        </div>
      </section>
      {/* ! TOKENOMICS AND TOKEN SALES CALL TO ACTION */}
      <section className="container-x">
        <CTACard
          title="Our Strategically designed ERGSEC Token"
          desc="The ERGSEC token is strategically designed as a financial instrument
          to advance renewable energy infrastructure projects, reward
          stakeholder engagement, and transparently distribute profits from
          energy generation and sales. By linking token issuance directly to
          clearly defined developmental milestones, we ensure sustainable growth
          and investor confidence."
          buttons={[
            {
              text: "Token Sale",
              href: "/token-sale",
            },
            {
              text: "Tokenomics",
              href: "/tokenomics",
            },
          ]}
        />
      </section>
      {/* ! MEET THE TEAM */}
      <section className="container">Meet the team</section>
      {/* ! CONTACT US CALL TO ACTION */}
      <section className="container-x">
        <ContactCTACard />
      </section>
    </Layout>
  );
}
