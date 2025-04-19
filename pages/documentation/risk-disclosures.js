import React from "react";
import { Layout, RiskCard, Jumbotron } from "../../components";

import text_data from "../../text_data";

export default function RiskDisclosures() {
  return (
    <Layout>
      <Jumbotron
        page="Risk Disclosures"
        desc="This document outlines the potential risks associated with the ERGSEC
          project, including technical, regulatory, operational, and ESG-related
          challenges. Each category is explored to provide transparency and
          proactive mitigation planning."
      />
      <section className="container space-y-4">
        {text_data.RISK_DISCLOSURES_DOCS.map(({ title, text, risks }, i) => (
          <RiskCard key={i} text={text} title={title} risks={risks} />
        ))}

        <p className="mt-10 text-gradient">
          Last updated: 18 March 2025 — Source: ERGSEC Oy Internal Audit &
          Strategy Department
        </p>
      </section>
    </Layout>
  );
}
