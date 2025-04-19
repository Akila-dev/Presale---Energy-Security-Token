import React from "react";
import { Layout, Jumbotron, Documentation } from "../../components";

import text_data from "../../text_data";

export default function LegalDisclaimers() {
  return (
    <Layout>
      {/* Jumbotron */}
      <Jumbotron
        page="Legal Disclaimers"
        desc="Renewable Energy Security Token Legal Disclaimers"
      />
      {/* Documentation */}
      <Documentation
        data={text_data.LEGAL_DISCLAIMERS_DOCS}
        commentary="This Disclaimer is for informational purposes only and does not
          constitute legal advice. You are encouraged to consult with
          independent legal counsel."
      />
    </Layout>
  );
}
