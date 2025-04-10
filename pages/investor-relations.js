// pages/investor-relations.js
import React from "react";

import { Layout } from "../components";

// React Icons (install with: yarn add react-icons)
import {
  FaFilePdf,
  FaFileAlt,
  FaBookOpen,
  FaClipboardCheck,
  FaShieldAlt,
  FaMoneyBillWave,
  FaHandshake,
} from "react-icons/fa";

export default function InvestorRelations() {
  return (
    <Layout>
      {/* Dark gradient background */}
      <section className="bg-gradient-to-b from-gray-900 to-black px-6 py-12">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Title */}
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-white">
              Investor Relations
            </h2>
            <p className="text-gray-300">
              A dedicated hub for all ERGSEC investors and stakeholders.
            </p>
          </div>

          {/* Overview Card */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8">
            <h3 className="text-3xl font-semibold mb-4 text-green-400">
              A Secure Investment in Renewable Energy
            </h3>
            <p className="text-lg leading-relaxed text-gray-300">
              The ERGSEC token represents a regulatory-compliant opportunity to
              invest in the energy of the future. Our phased licensing model
              ensures global access during the pre-sale, followed by full MiFID
              II security token registration in the EU.
            </p>
          </div>

          {/* Key Documents */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-400">
              Key Documents
            </h3>
            <ul className="space-y-3 text-lg text-gray-300">
              <li className="flex items-center gap-2">
                <FaFilePdf className="text-red-500" />
                <a
                  href="/docs/investment-deck.pdf"
                  className="text-green-400 underline hover:text-green-300"
                >
                  Investment Deck (PDF)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaFileAlt className="text-gray-400" />
                <a
                  href="/docs/prospectus.pdf"
                  className="text-green-400 underline hover:text-green-300"
                >
                  Executive Summary
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaBookOpen className="text-yellow-500" />
                <span>
                  <a
                    href="/documentation/whitepaper"
                    className="text-green-400 underline hover:text-green-300"
                  >
                    Whitepaper
                  </a>{" "}
                  &amp;{" "}
                  <a
                    href="/documentation/litepaper"
                    className="text-green-400 underline hover:text-green-300"
                  >
                    Litepaper
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaClipboardCheck className="text-blue-500" />
                <a
                  href="/documentation/token-purchase-agreements"
                  className="text-green-400 underline hover:text-green-300"
                >
                  Token Purchase Agreement
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaShieldAlt className="text-green-500" />
                <a
                  href="/documentation/audit-reports"
                  className="text-green-400 underline hover:text-green-300"
                >
                  Audit Reports
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaShieldAlt className="text-green-500" />
                <a
                  href="/documentation/legal-disclaimers"
                  className="text-green-400 underline hover:text-green-300"
                >
                  Legal Disclaimers
                </a>
              </li>
            </ul>
          </div>

          {/* Financial Model */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-400">
              Financial Model &amp; Revenue Streams
            </h3>
            <p className="text-lg leading-relaxed text-gray-300">
              Revenue is generated through the production and sale of renewable
              electricity. Token holders benefit from profit-sharing and
              long-term dividends. Our financial forecasts are supported by
              infrastructure scaling milestones and token buy-back mechanisms.
            </p>
          </div>

          {/* Compliance Roadmap */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-400">
              Compliance Journey
            </h3>
            <p className="text-lg leading-relaxed text-gray-300">
              <strong>Phase 1:</strong> Global pre-sale with optional KYC.{" "}
              <br />
              <strong>Phase 2:</strong> Offshore token registration (outside
              EU). <br />
              <strong>Phase 3:</strong> EU-regulated, MiFID II-compliant
              security token with full licensing and reporting structure.
            </p>
          </div>

          {/* Governance & Rights */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-400">
              Governance &amp; Token Rights
            </h3>
            <p className="text-lg leading-relaxed text-gray-300">
              ERGSEC tokens entitle holders to revenue participation and
              platform access. Advanced phases will introduce governance rights
              via a decentralized participation layer.
            </p>
          </div>

          {/* Partnerships */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-400">
              Backers &amp; Strategic Partners
            </h3>
            <p className="text-lg leading-relaxed text-gray-300">
              We are building alliances with ESG-focused investors, renewable
              infrastructure funds, and energy trading platforms. Partnership
              inquiries are welcome via the contact form below.
            </p>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-400">
              Connect with Investor Relations
            </h3>
            <p className="text-lg mb-4 text-gray-300">
              Schedule a 1-on-1 call or request our complete investment package.
            </p>
            <ul className="text-lg space-y-2 text-gray-300">
              <li>
                Email:{" "}
                <a
                  href="mailto:ir@ergsec.com"
                  className="text-green-400 underline hover:text-green-300"
                >
                  ir@ergsec.com
                </a>
              </li>
              <li>
                Telegram:{" "}
                <a
                  href="https://t.me/ergsec_ir"
                  className="text-green-400 underline hover:text-green-300"
                >
                  @ergsec_ir
                </a>
              </li>
              <li>
                Schedule:{" "}
                <a
                  href="/contact/form"
                  className="text-green-400 underline hover:text-green-300"
                >
                  Request a Meeting
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
