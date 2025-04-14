// pages/token-sale.js
import React from "react";

import { Layout, Jumbotron, Heading } from "../components";

export default function TokenSale() {
  return (
    <Layout>
      {/* Jumbotron */}
      <Jumbotron page="Token Sale" desc="Token Sale Details" />

      {/* Pre-Sale Details Section */}
      <section className="container grid-2">
        <div className="col-span-1">
          <Heading
            tag="Pre-Sale"
            title="Pre-Sale Details"
            desc="The Energy Security Token (ERGSEC) pre-sale phase provides exclusive
            early access to our renewable-energy-based security token. Investors
            participating at this stage will benefit from preferential pricing
            and structured discounts."
            left
          />
        </div>
        <ul className="col-span-1 text-[1.2em] flex flex-col gap-1">
          <li>
            <strong>Start Date:</strong> [Insert Pre-sale Start Date]
          </li>
          <li>
            <strong>End Date:</strong> [Insert Pre-sale End Date]
          </li>
          <li>
            <strong>Pricing:</strong> [Insert Initial Token Price] per ERGSEC
          </li>
          <li>
            <strong>Discount Phases:</strong>
            <ul className="list-circle ml-6">
              <li>Phase 1: [Insert % discount] – First [X] days</li>
              <li>Phase 2: [Insert % discount] – Next [X] days</li>
              <li>Phase 3: [Insert % discount] – Final [X] days</li>
            </ul>
          </li>
          <li>
            <strong>Total Supply:</strong> 100,000,000 ERGSEC (fixed supply)
          </li>
          <li>
            <strong>No transaction taxes</strong> applied on buying or selling
            (0%)
          </li>
          <li>
            <strong>Accepted Currencies:</strong> EUR, USD, BTC, ETH, USDT
          </li>
          <li>
            <strong>KYC/AML:</strong> Optional
          </li>
        </ul>
      </section>

      {/* Main Sale Details Section */}
      <section className="container grid-2 dark-gradient">
        <div className="col-span-1">
          <Heading
            tag="Main Sale"
            title="Main Sale Details"
            desc="Following our successful pre-sale, the Energy Security Token
            (ERGSEC) will enter its main sale phase, initially registered
            outside the EU jurisdiction. This strategic step allows us to
            expedite token distribution while maintaining full regulatory
            compliance. Subsequently, ERGSEC will be re-licensed as a fully
            MiFID II-compliant EU-regulated security token."
            left
          />
        </div>
        <ul className="col-span-1 text-[1.2em] flex flex-col gap-1">
          <li>
            <strong>Main Sale Start Date:</strong> [Insert Main Sale Start Date]
          </li>
          <li>
            <strong>Main Sale End Date:</strong> [Insert Main Sale End Date]
          </li>
          <li>
            <strong>Main Sale Price:</strong> [Insert Main Sale Price] per
            ERGSEC
          </li>
          <li>
            <strong>Token Classification:</strong> Security Token, MiFID II
            compliant upon EU licensing
          </li>
          <li>
            <strong>Minimum Purchase:</strong> [Insert Minimum Purchase Amount]
          </li>
          <li>
            <strong>No taxes</strong> applied on token purchases or sales (0%)
          </li>
          <li>
            <strong>Regulatory Framework:</strong>
            <ul className="list-circle ml-6">
              <li>Initial registration outside the EU</li>
              <li>
                MiFID II compliance (EU-regulated security token) in subsequent
                phase
              </li>
            </ul>
          </li>
          <li>
            <strong>Accepted Currencies:</strong> EUR, USD, BTC, ETH, USDT
          </li>
          <li>
            <strong>KYC/AML:</strong> Mandatory for all investors
          </li>
        </ul>
      </section>

      {/* Regulation Notice */}
      <section className="container-x">
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
