// pages/tokenomics.js
import React from "react";

import {
  Layout,
  Jumbotron,
  Heading,
  TextAndDetailsList,
  TextDiv,
} from "../components";
import text_data from "../text_data";

export default function Tokenomics() {
  return (
    <Layout>
      {/* Jumbotron */}
      <Jumbotron page="Tokenomics" desc="Token Details" />

      {/* ABOUT TOKEN SECTION */}
      <section className="container grid-2">
        <div className="col-span-1 ">
          <Heading tag="About Token" title="The ERGSEC token" left />
        </div>
        <div className="col-span-1 flex flex-col gap-1">
          <TextDiv className="lg:text-[1.4em]">
            The ERGSEC token is strategically designed as a financial instrument
            to advance renewable energy infrastructure projects, reward
            stakeholder engagement, and transparently distribute profits from
            energy generation and sales. By linking token issuance directly to
            clearly defined developmental milestones, we ensure sustainable
            growth and investor confidence.
          </TextDiv>
        </div>
      </section>

      {/* Token Supply and Issuance */}
      <section className="container grid-2 bg-dark">
        <div className="col-span-1 ">
          <Heading
            tag="Supply and Issuance"
            title="Token Supply and Issuance"
            left
          />
        </div>
        <div className="col-span-1 flex flex-col gap-1 md:pt-3">
          <TextDiv className="lg:text-[1.4em]">
            A fixed total of{" "}
            <strong className="text-gradient">10,000,000 ERGSEC tokens</strong>{" "}
            will be minted progressively in alignment with critical project
            milestones. Token issuance is phased, ensuring responsible financial
            management and clear accountability at every stage.
          </TextDiv>
        </div>
      </section>

      {/* TOKEN_DISTRIBUTIION_BREAKDOWN Section */}
      <TextAndDetailsList
        tag="Distribution Breakdown"
        title="Token Distribution Breakdown"
        left
        data={text_data.TOKEN_DISTRIBUTIION_BREAKDOWN}
      />

      {/* Token Utility and Functionality  SECTION */}
      <TextAndDetailsList
        tag="Utility and Functionality"
        title="Token Utility and Functionality"
        desc="ERGSEC tokens possess clear utility and value within the ecosystem, providing holders with multiple functionalities"
        left
        data={text_data.TOKEN_UTILITY_AND_FUNCTIONALITY}
        additionalClass="bg-dark"
      />

      {/* Economic Incentives and Value Preservation  SECTION */}
      <TextAndDetailsList
        tag="Economic Incentives"
        title="Economic Incentives and Value Preservation"
        desc="ERGSEC tokens are designed with robust economic mechanisms that foster long-term value creation and stability"
        left
        data={text_data.ECONOMIC_INCENTIVES_AND_VALUE_PRESERVATION}
      />

      {/* Long-Term Sustainability and Compliance  SECTION */}
      <TextAndDetailsList
        tag="Sustainability and Compliance"
        title="Long-Term Sustainability and Compliance"
        desc="ERGSEC is committed to robust regulatory adherence, transitioning from an initial registration outside the EU to full compliance under the European Union's MiFID II framework. This phased regulatory pathway ensures broad international market acceptance, investor protection, and long-term project sustainability."
        left
        data={text_data.LONG_TERM_SUSTAINABILITY_AND_CONPLIANCE}
        additionalClass="dark-gradient"
      />
    </Layout>
  );
}
