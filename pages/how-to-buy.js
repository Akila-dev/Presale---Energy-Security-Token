import React from "react";
import { Layout } from "../components";

export default function HowToBuyAndFAQ() {
  return (
    <Layout>
      {/* Dark gradient background */}
      <section className="bg-gradient-to-b from-gray-900 to-black px-6 py-12">
        <div className="max-w-7xl mx-auto text-gray-200">
          {/* Page Heading & Intro */}
          <h1 className="text-4xl font-bold mb-6 text-white">
            How to Buy &amp; FAQs
          </h1>
          <p className="text-lg mb-10 max-w-3xl">
            Follow our detailed step-by-step guide to purchase ERGSEC tokens
            securely, and review common questions to learn more about our
            project, payment methods, and distribution timeline.
          </p>

          {/* Local Navigation */}
          <nav className="mb-12">
            <ul className="flex flex-col sm:flex-row gap-4 text-sm">
              <li>
                <a
                  href="#buying-guide"
                  className="px-4 py-2 bg-green-600 rounded-md hover:bg-green-500 transition font-medium text-white"
                >
                  Step-by-Step Guide
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="px-4 py-2 bg-green-600 rounded-md hover:bg-green-500 transition font-medium text-white"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </nav>

          {/* Buying Guide Card */}
          <div
            id="buying-guide"
            className="bg-gray-800 shadow-lg rounded-lg p-6 mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-green-400">
              Step-by-Step Buying Guide
            </h2>

            <p className="text-lg mb-6 text-gray-300">
              Follow these detailed steps to connect your wallet and securely
              purchase ERGSEC tokens during our token sale.
            </p>

            <div className="space-y-10">
              {/* Step 1: Wallet Installation */}
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-green-300">
                  Step 1: Install Your Preferred Wallet
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    We recommend using a secure, non-custodial wallet to store
                    your ERGSEC tokens. For Solana users,{" "}
                    <strong>Phantom</strong> offers a fast and easy experience.
                    Ethereum users may opt for <strong>MetaMask</strong>.
                  </li>
                  <li>
                    Visit the official website of your chosen wallet provider (
                    <a
                      href="https://phantom.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 underline hover:text-green-300"
                    >
                      Phantom
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://metamask.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 underline hover:text-green-300"
                    >
                      MetaMask
                    </a>
                    ) and follow their installation instructions.
                  </li>
                  <li>
                    Set up your wallet securely by creating a strong password,
                    storing your recovery phrase safely offline, and enabling
                    two-factor authentication (if supported).
                  </li>
                </ul>
              </div>

              {/* Step 2: Connect Your Wallet */}
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-green-300">
                  Step 2: Connect Your Wallet to the Platform
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Log into your ERGSEC token purchase platform account.</li>
                  <li>
                    Select the option to “Connect Wallet” — typically on the
                    homepage or in your user dashboard.
                  </li>
                  <li>
                    Choose your installed wallet (e.g., Phantom or MetaMask) and
                    confirm via the wallet interface.
                  </li>
                  <li>
                    Verify the wallet is connected before proceeding to the next
                    step.
                  </li>
                </ul>
              </div>

              {/* Step 3: Select Token Amount */}
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-green-300">
                  Step 3: Select the Amount of Tokens
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Navigate to the “Token Sale” section of the platform.</li>
                  <li>
                    Review token pricing, discounts, and any purchase limits.
                  </li>
                  <li>
                    Enter the number of ERGSEC tokens you wish to buy. The
                    system displays the equivalent cost in fiat or crypto.
                  </li>
                  <li>
                    Double-check wallet address, token amount, and total cost
                    before continuing.
                  </li>
                </ul>
              </div>

              {/* Step 4: Confirm Transaction */}
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-green-300">
                  Step 4: Confirm and Complete the Transaction
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Click “Purchase” or “Confirm Transaction” to proceed.</li>
                  <li>
                    Your wallet (e.g., Phantom or MetaMask) prompts you to
                    review and approve the transaction.
                  </li>
                  <li>
                    Once approved, the blockchain processes the transaction
                    within seconds or minutes.
                  </li>
                  <li>
                    A confirmation appears when complete. Tokens will appear in
                    your wallet per the ERGSEC distribution schedule.
                  </li>
                </ul>
              </div>

              {/* Post-Purchase */}
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-green-300">
                  Post-Purchase Recommendations
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Add the ERGSEC token contract address to your wallet to see
                    your balance (available on our official site).
                  </li>
                  <li>
                    Stay informed via your ERGSEC dashboard and communication
                    channels for updates, token distribution, and announcements.
                  </li>
                  <li>
                    If you encounter issues, contact our support team through
                    official channels for assistance.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Card */}
          <div id="faq" className="bg-gray-800 shadow-lg rounded-lg p-6 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-green-400">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              {/* FAQ 1 */}
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-green-300">
                  What is the ERGSEC security token?
                </h3>
                <p className="leading-relaxed">
                  The ERGSEC token is a regulated security token specifically
                  designed to fund the construction and operation of renewable
                  energy infrastructure. It grants holders governance rights,
                  staking opportunities, dividend distributions from energy
                  sales, and exclusive platform features. By holding ERGSEC, you
                  directly participate in the growth and profitability of
                  eco-friendly energy production.
                </p>
              </div>

              {/* FAQ 2 */}
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-green-300">
                  How do I participate in the ERGSEC token sale?
                </h3>
                <p className="leading-relaxed">
                  Participating is simple. Follow the steps in our{" "}
                  <a
                    href="#buying-guide"
                    className="text-green-400 underline hover:text-green-300"
                  >
                    Step-by-Step Buying Guide
                  </a>{" "}
                  to set up your wallet, select the token amount, and confirm
                  your transaction securely.
                </p>
              </div>

              {/* FAQ 3 */}
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-green-300">
                  What payment methods are accepted?
                </h3>
                <p className="leading-relaxed">
                  ERGSEC tokens can be purchased using various popular
                  cryptocurrencies, including Ethereum (ETH), Tether (USDT),
                  USDC, and Bitcoin (BTC). Fiat payments may be supported via
                  select gateways, depending on your region. Check our platform
                  for the latest list of accepted methods.
                </p>
              </div>

              {/* FAQ 4 (Removed KYC) */}

              {/* FAQ 5 */}
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-green-300">
                  Where can I find more details about the ERGSEC token?
                </h3>
                <p className="leading-relaxed">
                  In-depth information about the token’s economic model, project
                  roadmap, and legal documentation is available in our{" "}
                  <a
                    href="/documentation"
                    className="text-green-400 underline hover:text-green-300"
                  >
                    Documentation
                  </a>
                  ,{" "}
                  <a
                    href="/documentation/whitepaper"
                    className="text-green-400 underline hover:text-green-300"
                  >
                    Whitepaper
                  </a>
                  , and{" "}
                  <a
                    href="/tokenomics"
                    className="text-green-400 underline hover:text-green-300"
                  >
                    Tokenomics
                  </a>{" "}
                  pages. If you need personalized assistance, please reach out
                  via our{" "}
                  <a
                    href="/contact"
                    className="text-green-400 underline hover:text-green-300"
                  >
                    Contact page
                  </a>
                  .
                </p>
              </div>

              {/* FAQ 6 */}
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-green-300">
                  When will tokens be distributed after purchase?
                </h3>
                <p className="leading-relaxed">
                  Tokens purchased during pre-sale or main sale phases are
                  distributed according to our public timeline, typically
                  shortly after each phase concludes. We’ll share updates on
                  distribution dates via official channels.
                </p>
              </div>

              {/* FAQ 7 */}
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-green-300">
                  Are there any taxes or fees when buying ERGSEC tokens?
                </h3>
                <p className="leading-relaxed">
                  Our platform applies no additional taxes or purchase fees, but
                  standard blockchain network fees or wallet provider charges
                  may apply. Tax obligations vary by jurisdiction, so consult a
                  local tax advisor to remain compliant.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA or Link */}
          <div className="text-center">
            <a
              href="/contact"
              className="inline-block px-6 py-2 bg-green-600 rounded-md hover:bg-green-500 text-white font-medium transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
