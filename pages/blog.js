// pages/blog.js
import React from "react";

import { Layout } from "../components";

import { FaCalendarAlt } from "react-icons/fa";

export default function Blog() {
  return (
    <Layout>
      {/* Dark gradient background */}
      <section className="bg-gradient-to-b from-gray-900 to-black px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <h2 className="text-4xl font-bold mb-6 text-white">
            Blog &amp; News
          </h2>
          <p className="text-lg mb-10 text-gray-300 max-w-3xl">
            Stay updated with the latest developments, announcements, and
            industry insights surrounding the ERGSEC renewable energy security
            token project.
          </p>

          {/* Blog Articles */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-6 text-green-400">
              Latest Blog Posts
            </h3>

            {/* Blog Article 1 */}
            <article className="bg-gray-800 shadow-xl rounded-lg p-6 mb-8">
              <h4 className="text-2xl font-bold mb-2 text-green-300 hover:text-green-200 transition">
                <a href="/blog/how-ergsec-drives-sustainable-investments">
                  How ERGSEC is Driving Sustainable Investments with Blockchain
                </a>
              </h4>
              <div className="flex items-center text-gray-400 text-sm mb-3">
                <FaCalendarAlt className="mr-1" />
                <span>Published: May 15, 2025</span>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Blockchain meets sustainability. Discover how ERGSEC leverages
                tokenization to create unprecedented opportunities in renewable
                energy finance. Our latest insights reveal the advantages
                blockchain brings to environmental transparency and investor
                returns.
              </p>
            </article>

            {/* Blog Article 2 */}
            <article className="bg-gray-800 shadow-xl rounded-lg p-6 mb-8">
              <h4 className="text-2xl font-bold mb-2 text-green-300 hover:text-green-200 transition">
                <a href="/blog/renewable-energy-regulations-and-ergsec-compliance">
                  Navigating Renewable Energy Regulations: ERGSEC’s Path to
                  MiFID II Compliance
                </a>
              </h4>
              <div className="flex items-center text-gray-400 text-sm mb-3">
                <FaCalendarAlt className="mr-1" />
                <span>Published: May 5, 2025</span>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Compliance matters. Learn how ERGSEC strategically transitions
                from global pre-sales to full EU regulatory compliance under
                MiFID II, protecting investors and aligning with the EU’s
                ambitious energy targets.
              </p>
            </article>
          </div>

          {/* Recent News */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-6 text-green-400">
              Recent News
            </h3>
            <div className="bg-gray-800 shadow-xl rounded-lg p-6">
              <ul className="space-y-6 text-gray-200">
                <li>
                  <p className="font-semibold text-lg text-green-300">
                    ERGSEC Completes Initial Presale Round, Raising €1.5M
                  </p>
                  <span className="text-gray-400 text-sm">May 18, 2025</span>
                  <p className="mt-1 leading-relaxed">
                    Our initial pre-sale round concluded successfully,
                    surpassing fundraising expectations and setting the stage
                    for infrastructure planning.
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-lg text-green-300">
                    Partnership Announced with GreenTech Energy Solutions
                  </p>
                  <span className="text-gray-400 text-sm">May 10, 2025</span>
                  <p className="mt-1 leading-relaxed">
                    ERGSEC proudly announces its strategic partnership with
                    GreenTech Energy, enhancing operational efficiency and
                    accelerating project timelines.
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-lg text-green-300">
                    ERGSEC Token Audit Completed Successfully by CertiK
                  </p>
                  <span className="text-gray-400 text-sm">April 28, 2025</span>
                  <p className="mt-1 leading-relaxed">
                    CertiK has successfully audited the ERGSEC smart contracts,
                    underscoring our commitment to security and transparency.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center">
            <a
              href="/community/press"
              className="inline-block px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-500 transition font-medium"
            >
              View All Articles
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
