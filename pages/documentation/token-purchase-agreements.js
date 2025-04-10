import React from "react";
import { Layout } from "../../components";

export default function TokenPurchaseAgreements() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 py-12 text-white">
        <h2 className="text-4xl font-bold mb-6">Token Purchase Agreement</h2>

        <p className="text-lg mb-6 text-gray-300">
          This agreement outlines the terms and conditions governing the
          purchase of the ERGSEC Renewable Energy Security Token. It defines the
          roles, responsibilities, and acknowledgments of both the purchaser and
          the issuing company.
        </p>

        <h3 className="text-2xl font-semibold text-purple-300 mb-2">
          1. Definitions
        </h3>
        <p className="mb-6">
          "Token" refers to the ERGSEC Renewable Energy Security Token issued by
          ERGSEC Oy. "Platform" means the blockchain-based energy platform
          operated by ERGSEC Oy.
        </p>

        <h3 className="text-2xl font-semibold text-purple-300 mb-2">
          2. Purchase and Sale
        </h3>
        <p className="mb-6">
          Subject to this Agreement, ERGSEC Oy agrees to sell, and the purchaser
          agrees to acquire, Tokens in accordance with terms set forth in the
          official offering documents.
        </p>

        <h3 className="text-2xl font-semibold text-purple-300 mb-2">
          3. Payment
        </h3>
        <p className="mb-6">
          Payment must be made in approved currencies or cryptocurrencies per
          instructions. Purchase is completed upon confirmation of payment
          receipt.
        </p>

        <h3 className="text-2xl font-semibold text-purple-300 mb-2">
          4. Purchaser Representations
        </h3>
        <ul className="list-disc list-inside mb-6 text-gray-300">
          <li>Has read and understood all legal and risk disclosures.</li>
          <li>Is acquiring Tokens in compliance with applicable laws.</li>
          <li>Possesses financial knowledge to assess the purchase.</li>
          <li>Is acquiring Tokens for personal use, not redistribution.</li>
          <li>Is eligible to purchase Tokens under their local laws.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-purple-300 mb-2">
          5. Company Representations
        </h3>
        <ul className="list-disc list-inside mb-6 text-gray-300">
          <li>
            ERGSEC Oy is duly incorporated and operating under Finnish law.
          </li>
          <li>Has legal authority to issue Tokens.</li>
          <li>Issuance does not violate applicable laws or regulations.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-purple-300 mb-2">
          6. Token Use and Limitations
        </h3>
        <p className="mb-6">
          Tokens provide access to defined utility, governance, and rewards.
          They do not entitle holders to company equity or traditional
          shareholder rights.
        </p>

        <h3 className="text-2xl font-semibold text-purple-300 mb-2">
          7. Risk Acknowledgment
        </h3>
        <p className="mb-6">
          Purchasers acknowledge the potential risks including legal
          uncertainties, platform underperformance, market fluctuations, and
          technology issues.
        </p>

        <h3 className="text-2xl font-semibold text-purple-300 mb-2">
          8. Compliance and Cooperation
        </h3>
        <p className="mb-6">
          Purchasers agree to cooperate with KYC/AML requests and other
          compliance measures as needed.
        </p>

        <h3 className="text-2xl font-semibold text-purple-300 mb-2">
          9. Indemnification
        </h3>
        <p className="mb-6">
          Purchasers shall indemnify ERGSEC Oy against any claims arising from
          breach of agreement terms or misrepresentation.
        </p>

        <h3 className="text-2xl font-semibold text-purple-300 mb-2">
          10. Liability Limitation
        </h3>
        <p className="mb-6">
          ERGSEC Oy's liability shall not exceed the original purchase price. No
          liability is accepted for consequential losses.
        </p>

        <h3 className="text-2xl font-semibold text-purple-300 mb-2">
          11. Governing Law
        </h3>
        <p className="mb-6">
          This agreement is governed by Finnish law. Disputes will be resolved
          in Finnish courts.
        </p>

        <h3 className="text-2xl font-semibold text-purple-300 mb-2">
          12. Amendments
        </h3>
        <p className="mb-6">
          ERGSEC Oy reserves the right to modify this agreement. Updated terms
          will be published on the official website.
        </p>

        <h3 className="text-2xl font-semibold text-purple-300 mb-2">
          13. Entire Agreement
        </h3>
        <p className="mb-6">
          This document constitutes the entire agreement between the parties
          regarding token purchases.
        </p>

        <h3 className="text-2xl font-semibold text-purple-300 mb-2">
          14. Severability
        </h3>
        <p className="mb-6">
          If any provision is deemed unenforceable, the remaining provisions
          shall remain valid and enforceable.
        </p>

        <h3 className="text-2xl font-semibold text-purple-300 mb-2">
          15. Acknowledgment
        </h3>
        <p className="mb-6">
          By purchasing Tokens, you confirm acceptance of these terms and
          acknowledge legal and financial responsibilities.
        </p>

        <p className="text-sm text-gray-500 mt-12">
          This Agreement does not constitute legal advice. Consult your counsel
          to ensure compliance in your jurisdiction.
        </p>
      </section>
    </Layout>
  );
}
