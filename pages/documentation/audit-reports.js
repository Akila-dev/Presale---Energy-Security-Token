// pages/documentation/audit-reports.js
import React from "react";

import { Layout, Jumbotron, Documentation } from "../../components";

import text_data from "../../text_data";

export default function AuditReports() {
  return (
    <Layout>
      {/* Jumbotron */}
      <Jumbotron
        page="Audit Reports"
        desc="Renewable Energy Security Audit Reports"
      />
      {/* Documentation */}
      <Documentation
        data={text_data.AUDIT_REPORTS_DOCS}
        commentary="Xxxx xxx xxxx. This section contains external audit reports that verify the project's code, financials, and overall security."
      />
    </Layout>
  );
}
