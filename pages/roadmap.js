import React from "react";

import { Layout } from "../components";

export default function Roadmap() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-8">Roadmap</h2>

        <p className="text-lg mb-6">
          Our development roadmap outlines the detailed progression through
          strategic milestones, clearly defined phases, and measurable goals,
          guiding us towards building a decentralized renewable energy ecosystem
          powered by the ERGSEC security token.
        </p>

        <div className="space-y-10">
          {/* Q2 2025 */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Q2 2025: Initial Token Sales (Two Rounds)
            </h3>
            <ul className="list-disc ml-6 text-lg">
              <li>
                Launch and completion of Pre-Sale round, targeting early
                adopters with exclusive pricing.
              </li>
              <li>
                Main token sale phase opens to wider investors with tiered
                pricing and clearly defined purchase limits.
              </li>
              <li>
                Funds raised directed primarily towards regulatory compliance,
                market outreach, and early-stage infrastructure planning.
              </li>
            </ul>
          </div>

          {/* Q3 2025 */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Q3 2025: Application for MiFID II Licence and Token Re-licensing
            </h3>
            <ul className="list-disc ml-6 text-lg">
              <li>
                Submit official application for MiFID II regulatory licensing
                within the EU.
              </li>
              <li>
                Begin comprehensive audit and compliance assessment with
                independent third-party financial and legal advisors.
              </li>
              <li>
                Commence legal procedures to transition ERGSEC tokens to a fully
                regulated MiFID II compliant security token.
              </li>
            </ul>
          </div>

          {/* Q4 2025 */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Q4 2025: Permits and Construction of First Renewable Energy Power
              Station
            </h3>
            <ul className="list-disc ml-6 text-lg">
              <li>
                Secure necessary local and regional permits for renewable energy
                generation facility.
              </li>
              <li>
                Initiate groundbreaking and construction activities for initial
                solar/wind power generation infrastructure.
              </li>
              <li>
                Implement rigorous project oversight and environmental
                compliance standards.
              </li>
            </ul>
          </div>

          {/* Q1 2026 */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Q1 2026: Station and Battery System Validation Phase
            </h3>
            <ul className="list-disc ml-6 text-lg">
              <li>
                Complete construction of the first renewable energy station
                including advanced battery storage systems.
              </li>
              <li>
                Conduct thorough testing and validation of energy output, grid
                integration, storage efficiency, and safety compliance.
              </li>
              <li>
                Obtain final regulatory certifications and operational
                clearances.
              </li>
            </ul>
          </div>

          {/* Q2 2026 */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Q2 2026: Energy Production Begins, Generating Initial Revenues
            </h3>
            <ul className="list-disc ml-6 text-lg">
              <li>
                Official commencement of commercial-scale renewable energy
                generation.
              </li>
              <li>
                Establish contracts and initiate sales of energy to local grids,
                businesses, and residential customers.
              </li>
              <li>
                Monitor operational metrics closely for early optimization
                opportunities and enhanced profitability.
              </li>
            </ul>
          </div>

          {/* Q3 2026 */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Q3 2026: First Profit Distribution to Token Holders
            </h3>
            <ul className="list-disc ml-6 text-lg">
              <li>
                Initiate first dividend payouts to ERGSEC token holders based on
                early revenues from energy sales.
              </li>
              <li>
                Implement transparent and audited financial reporting to clearly
                communicate profit distribution.
              </li>
              <li>
                Reinvest a portion of revenues into token buy-back programs to
                enhance long-term token value.
              </li>
            </ul>
          </div>

          {/* Q4 2026 */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Q4 2026: Acquisition of Land, Permits, and Construction Start for
              Second Power Station
            </h3>
            <ul className="list-disc ml-6 text-lg">
              <li>
                Complete acquisition of strategic land parcels suitable for
                second renewable energy facility.
              </li>
              <li>
                Begin comprehensive permitting process for second site, ensuring
                compliance with environmental and regional energy standards.
              </li>
              <li>
                Commence initial infrastructure preparations and construction
                groundwork.
              </li>
            </ul>
          </div>

          {/* Q2 2027 */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Q2 2027: Validation and Operational Start of Second Station
            </h3>
            <ul className="list-disc ml-6 text-lg">
              <li>
                Complete the construction phase for the second renewable energy
                generation facility.
              </li>
              <li>
                Execute detailed testing and operational validation of all
                generation and battery storage systems.
              </li>
              <li>
                Begin full-scale energy production and integration into the
                existing energy sales framework.
              </li>
            </ul>
          </div>

          {/* Q3 2027 */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Q3 2027: Second Profit Distribution to Token Holders
            </h3>
            <ul className="list-disc ml-6 text-lg">
              <li>
                Increase dividend payouts reflecting combined revenues from
                first and second energy stations.
              </li>
              <li>
                Maintain transparent financial disclosure, enhancing investor
                confidence and project credibility.
              </li>
              <li>
                Evaluate profitability and scale ongoing token buy-back
                initiatives to support token value appreciation.
              </li>
            </ul>
          </div>

          {/* Q4 2027 */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Q4 2027: Site Acquisition and Construction Planning for Third
              Power Station (Loan Funded)
            </h3>
            <ul className="list-disc ml-6 text-lg">
              <li>
                Identify and acquire prime locations for third renewable energy
                power station.
              </li>
              <li>
                Prepare detailed engineering and construction blueprints
                leveraging data from previous successful projects.
              </li>
              <li>
                Secure financing through loans, using the first two profitable
                stations as collateral, to facilitate accelerated growth without
                additional token dilution.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
