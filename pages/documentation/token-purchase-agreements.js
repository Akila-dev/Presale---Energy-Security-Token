import React from "react";
import { Layout, Jumbotron, Documentation } from "../../components";

import text_data from "../../text_data";

export default function TokenPurchaseAgreements() {
  return (
    <Layout>
      {/* Jumbotron */}
      <Jumbotron
        page="Token Purchase Agreement"
        desc="Renewable Energy Security Token Token Purchase Agreement"
      />
      {/* Documentation */}
      <Documentation
        data={text_data.TOKEN_PURCHASE_AGREEMENTS_DOCS}
        commentary="This Agreement does not constitute legal advice. Consult your counsel
          to ensure compliance in your jurisdiction."
      />
    </Layout>
  );
}
