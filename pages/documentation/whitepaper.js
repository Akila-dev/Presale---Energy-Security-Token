import React from "react";
import { Layout, Jumbotron, Documentation } from "../../components";

import text_data from "../../text_data";

export default function Whitepaper() {
  return (
    <Layout>
      {/* Jumbotron */}
      <Jumbotron
        page="Whitepaper"
        desc="Renewable Energy Security Token Whitepaper"
      />
      {/* Documentation */}
      <Documentation data={text_data.WHITEPAPER_DOCS} commentary="" />
    </Layout>
  );
}
