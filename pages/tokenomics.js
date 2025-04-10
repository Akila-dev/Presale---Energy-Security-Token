// pages/tokenomics.js
import React from "react";

import { Layout } from "../components";

export default function Tokenomics() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-8">Tokenomics</h2>

        <p className="text-lg mb-6">
          The ERGSEC token is strategically designed as a financial instrument
          to advance renewable energy infrastructure projects, reward
          stakeholder engagement, and transparently distribute profits from
          energy generation and sales. By linking token issuance directly to
          clearly defined developmental milestones, we ensure sustainable growth
          and investor confidence.
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-3">
            Token Supply and Issuance
          </h3>
          <p className="text-lg">
            A fixed total of <strong>10,000,000 ERGSEC tokens</strong> will be
            minted progressively in alignment with critical project milestones.
            Token issuance is phased, ensuring responsible financial management
            and clear accountability at every stage.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-3">
            Token Distribution Breakdown
          </h3>
          <ul className="list-disc ml-6 text-lg space-y-3">
            <li>
              <p>
                <strong>
                  25% – Regulatory Work & Expenses (Phase 1 Pre-sale)
                </strong>
              </p>
              <p>
                Funds are allocated to legal compliance, obtaining necessary
                regulatory clearances, licensing, audits, and establishing
                partnerships critical for launching the project internationally.
              </p>
            </li>
            <li>
              <p>
                <strong>25% – Initial Energy Power Stations (Phase 2)</strong>
              </p>
              <p>
                Dedicated to constructing and launching the first renewable
                energy generation facilities. Includes solar farms, wind parks,
                and other green energy infrastructures that demonstrate project
                viability and scalability.
              </p>
            </li>
            <li>
              <p>
                <strong>
                  25% – Large-scale Station Construction (Phase 3)
                </strong>
              </p>
              <p>
                Allocated towards expansive infrastructure projects aimed at
                significantly increasing renewable energy production capacity
                and market reach. Emphasis on geographic diversity, technology
                advancement, and operational efficiency.
              </p>
            </li>
            <li>
              <p>
                <strong>10% – Founders and Core Team</strong>
              </p>
              <p>
                Reserved for the founding members and executive team, vested
                under an <em>18-month lock-up period</em> to demonstrate
                commitment, align incentives with long-term investor interests,
                and ensure continuous, focused leadership.
              </p>
            </li>
            <li>
              <p>
                <strong>5% – Community Incentives</strong>
              </p>
              <p>
                Distributed through structured initiatives such as
                community-driven airdrops, promotional activities, referrals,
                and rewards programs designed to cultivate active engagement and
                expand the community ecosystem.
              </p>
            </li>
            <li>
              <p>
                <strong>5% – Staking Rewards</strong>
              </p>
              <p>
                Periodic token payouts incentivizing wallet holders who support
                the network through token staking, enhancing liquidity, network
                security, and investor retention.
              </p>
            </li>
            <li>
              <p>
                <strong>5% – Company Operations</strong>
              </p>
              <p>
                Reserved funds designated for essential business operations,
                including administrative salaries, comprehensive insurance
                policies, operational reserves, research and development, and
                strategic business contingencies.
              </p>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-3">
            Token Utility and Functionality
          </h3>
          <p className="text-lg">
            ERGSEC tokens possess clear utility and value within the ecosystem,
            providing holders with multiple functionalities:
          </p>
          <ul className="list-disc ml-6 text-lg space-y-3">
            <li>
              <strong>Governance Rights:</strong> Token holders actively
              participate in decision-making processes, voting on project
              priorities, new infrastructure investments, and strategic
              initiatives.
            </li>
            <li>
              <strong>Staking Benefits:</strong> Token holders can stake ERGSEC
              tokens to receive attractive yields, enhancing passive income
              opportunities and network participation.
            </li>
            <li>
              <strong>Dividends:</strong> Token holders benefit directly from
              revenues generated from renewable energy sales. Regular dividend
              distributions ensure tangible returns linked to real-world energy
              production performance.
            </li>
            <li>
              <strong>Platform Access:</strong> Token ownership provides
              exclusive access to proprietary platform features, premium energy
              market analytics, and participation in special energy project
              financing rounds.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-3">
            Economic Incentives and Value Preservation
          </h3>
          <p className="text-lg">
            ERGSEC tokens are designed with robust economic mechanisms that
            foster long-term value creation and stability:
          </p>
          <ul className="list-disc ml-6 text-lg space-y-3">
            <li>
              <strong>Dividend-Based Revenue Model:</strong> Revenue streams
              from renewable energy sales are systematically distributed to
              token holders as dividends, offering transparent, real-world
              asset-backed returns.
            </li>
            <li>
              <strong>Token Buy-Back Program:</strong> Regular strategic token
              repurchase programs using a portion of generated revenues help
              reduce circulating supply, enhance token scarcity, stabilize
              market price, and reward long-term token holders.
            </li>
            <li>
              <strong>No Transaction Taxes:</strong> A commitment to 0%
              transaction taxes on buying and selling ERGSEC tokens simplifies
              transactions and enhances investor participation and liquidity.
            </li>
            <li>
              <strong>Transparent Financial Audits:</strong> Regular third-party
              audits ensure financial transparency, verifying token utilization,
              expenditure accuracy, and compliance with the highest regulatory
              standards.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-3">
            Long-Term Sustainability and Compliance
          </h3>
          <p className="text-lg">
            ERGSEC is committed to robust regulatory adherence, transitioning
            from an initial registration outside the EU to full compliance under
            the European Union's MiFID II framework. This phased regulatory
            pathway ensures broad international market acceptance, investor
            protection, and long-term project sustainability.
          </p>
          <ul className="list-disc ml-6 text-lg space-y-3">
            <li>
              Initial non-EU token registration for rapid initial deployment.
            </li>
            <li>
              Subsequent re-licensing under the rigorous MiFID II framework to
              ensure comprehensive investor protection, transparency, and
              international credibility.
            </li>
            <li>
              Regular public reporting and compliance disclosures to reinforce
              transparency and trust.
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
