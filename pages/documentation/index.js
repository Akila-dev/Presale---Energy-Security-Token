// pages/documentation/index.js
import React from "react";
import Link from "next/link";
import { Layout } from "../../components";

export default function Documentation() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-gray-900 to-black px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-white">Documentation</h2>
          <p className="text-gray-300 mb-8 max-w-3xl">
            Explore our comprehensive documentation covering everything from our
            full Whitepaper and Litepaper to risk disclosures and token purchase
            agreements. Each resource provides in-depth insights into ERGSEC's
            technology, business model, and regulatory framework.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/documentation/whitepaper"
              className="block p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-semibold text-green-400 mb-2">
                Whitepaper
              </h3>
              <p className="text-gray-300 text-sm">
                Full Technical &amp; Business Overview
              </p>
            </Link>
            <Link
              href="/documentation/litepaper"
              className="block p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-semibold text-green-400 mb-2">
                Litepaper
              </h3>
              <p className="text-gray-300 text-sm">Technical Paper</p>
            </Link>
            <Link
              href="/documentation/audit-reports"
              className="block p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-semibold text-green-400 mb-2">
                Audit Reports
              </h3>
              <p className="text-gray-300 text-sm">
                Third-Party Audit Insights
              </p>
            </Link>
            <Link
              href="/documentation/legal-disclaimers"
              className="block p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-semibold text-green-400 mb-2">
                Legal Disclaimers
              </h3>
              <p className="text-gray-300 text-sm">Terms &amp; Conditions</p>
            </Link>
            <Link
              href="/documentation/risk-disclosures"
              className="block p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-semibold text-green-400 mb-2">
                Risk Disclosures
              </h3>
              <p className="text-gray-300 text-sm">Know the Risks</p>
            </Link>
            <Link
              href="/documentation/token-purchase-agreements"
              className="block p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-semibold text-green-400 mb-2">
                Token Purchase Agreements
              </h3>
              <p className="text-gray-300 text-sm">
                Purchase Terms &amp; Conditions
              </p>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
