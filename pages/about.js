import React from "react";

import { Layout } from "../components";

export default function About() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-6">About / Project Overview</h2>

        {/* Mission & Vision Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-2">Mission & Vision</h3>
          <p className="text-lg">
            Our mission is to accelerate the global transition to sustainable
            energy by providing transparent, secure, and accessible investment
            opportunities. Through the issuance of the Energy Security Token
            (ERGSEC), we empower investors to directly participate in pioneering
            renewable energy projects, driving both environmental progress and
            economic growth.
          </p>
        </div>

        {/* Team & Advisors Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-2">Team & Advisors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* CEO Card */}
            <div className="flex flex-col items-center">
              <img
                src="/images/team-cto.webp"
                alt="CTO"
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold">CTO Name</h4>
              <p className="text-gray-400 text-center">
                Master's in Technology, 25+ years business experience
              </p>
            </div>
            {/* CFO Card */}
            <div className="flex flex-col items-center">
              <img
                src="/images/team-cfo.webp"
                alt="CFO"
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold">CFO Name</h4>
              <p className="text-gray-400 text-center">
                MBA, 25+ years business management experience
              </p>
            </div>
            {/* CCO Card */}
            <div className="flex flex-col items-center">
              <img
                src="/images/team-cco.webp"
                alt="CCO"
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold">Security Expert</h4>
              <p className="text-gray-400 text-center">
                MBA, 15+ years crypto & cybersecurity experience
              </p>
            </div>
          </div>
        </div>

        {/* Partnerships Section */}
        <div>
          <h3 className="text-3xl font-semibold mb-2">Partnerships</h3>
          <p className="text-lg mb-4">
            We partner with leading organizations in renewable energy and
            blockchain technology to drive sustainable growth, improve ESG
            outcomes, and ensure secure, transparent profit distribution.
          </p>
          <img
            src="/images/partner-logos.webp"
            alt="Partner Logos"
            className="w-full object-contain"
          />
        </div>
      </section>
    </Layout>
  );
}
