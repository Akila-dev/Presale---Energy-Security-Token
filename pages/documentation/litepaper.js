import { Layout, Jumbotron, Documentation } from "../../components";

import text_data from "../../text_data";

export default function Litepaper() {
  return (
    <Layout>
      {/* Jumbotron */}
      <Jumbotron
        page="Litepaper"
        desc="Renewable Energy Security Token Litepaper"
      />
      {/* Documentation */}
      <Documentation data={text_data.LITEPAPER_DOCS} commentary="" />
    </Layout>
  );
}
