// pages/token-sale.js
import React from "react";

import { Layout, Jumbotron, Heading, TextAndDetailsList } from "../components";
import text_data from "../text_data";

export default function TokenSale() {
  return (
    <Layout>
      {/* Jumbotron */}
      <Jumbotron page="Token Sale" desc="Token Sale Details" />

      {/* Pre-Sale Details Section */}
      <TextAndDetailsList
        tag="Pre-Sale"
        title="Pre-Sale Details"
        desc="The Energy Security Token (ERGSEC) pre-sale phase provides exclusive
            early access to our renewable-energy-based security token. Investors
            participating at this stage will benefit from preferential pricing
            and structured discounts."
        left
        data={text_data.PRE_SALE_DETAILS}
      />

      {/* Main Sale Details Section */}
      <TextAndDetailsList
        tag="Main Sale"
        title="Main Sale Details"
        desc="Following our successful pre-sale, the Energy Security Token
            (ERGSEC) will enter its main sale phase, initially registered
            outside the EU jurisdiction. This strategic step allows us to
            expedite token distribution while maintaining full regulatory
            compliance. Subsequently, ERGSEC will be re-licensed as a fully
            MiFID II-compliant EU-regulated security token."
        left
        data={text_data.MAIN_SALE_DETAILS}
        additionalClass={"bg-dark"}
      />

      {/* Regulation Notice */}
      <section className="container">
        <Heading
          tag="Regulatory Notice"
          title="Regulatory Notice"
          desc="Investors should note the structured regulatory roadmap outlined above
          ensures ERGSEC Token adheres to international standards, providing
          increased transparency, investor protection, and compliance. Further
          details, including exact dates and pricing, will be provided as the
          sale approaches."
        />
      </section>
    </Layout>
  );
}
