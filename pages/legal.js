import React from "react";
import Link from "next/link";

import { Layout } from "../components";

export default function Legal() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 py-12 text-white">
        <h2 className="text-4xl font-bold mb-6">
          Legal: Terms & Conditions / Privacy Policy
        </h2>

        <p className="text-lg mb-6 text-gray-300">
          These Terms & Conditions and Privacy Policy govern your use of the
          ERGSEC Renewable Energy Security Token platform. By using this site or
          any services provided by ERGSEC Oy ("Company", "we", "us"), you agree
          to the terms outlined herein.
        </p>

        <h3 className="text-2xl font-semibold text-purple-300 mb-2">
          1. Terms & Conditions
        </h3>

        <h4 className="text-xl font-semibold mb-1">1.1 Use of the Platform</h4>
        <p className="mb-4">
          The platform provides blockchain-based renewable energy solutions. You
          agree to use the platform solely for lawful purposes and in compliance
          with all applicable laws.
        </p>

        <h4 className="text-xl font-semibold mb-1">
          1.2 User Responsibilities
        </h4>
        <ul className="list-disc list-inside mb-4 text-gray-300">
          <li>Provide accurate, current, and complete information.</li>
          <li>Maintain confidentiality of your account credentials.</li>
          <li>Report unauthorized account use immediately.</li>
        </ul>

        <h4 className="text-xl font-semibold mb-1">
          1.3 Intellectual Property
        </h4>
        <p className="mb-4">
          All content, trademarks, and technologies used on the platform are the
          exclusive property of ERGSEC Oy.
        </p>

        <h4 className="text-xl font-semibold mb-1">
          1.4 Limitation of Liability
        </h4>
        <p className="mb-4">
          ERGSEC Oy shall not be held liable for any indirect, incidental, or
          consequential damages from your platform use.
        </p>

        <h4 className="text-xl font-semibold mb-1">1.5 Amendments</h4>
        <p className="mb-4">
          We reserve the right to update this policy. Continued use implies
          acceptance of any amendments posted to our website.
        </p>

        <h3 className="text-2xl font-semibold text-purple-300 mb-2">
          2. Privacy Policy
        </h3>

        <h4 className="text-xl font-semibold mb-1">
          2.1 Information Collection
        </h4>
        <p className="mb-4">
          We collect personal data like name, email, and wallet address, and
          analytical data like IP, browser type, and usage statistics.
        </p>

        <h4 className="text-xl font-semibold mb-1">2.2 Use of Information</h4>
        <ul className="list-disc list-inside mb-4 text-gray-300">
          <li>Deliver and improve services.</li>
          <li>Comply with legal regulations.</li>
          <li>Prevent fraud and improve security.</li>
          <li>Send notifications about updates or features.</li>
        </ul>

        <h4 className="text-xl font-semibold mb-1">2.3 Information Sharing</h4>
        <p className="mb-4">
          We do not sell your information. Limited third-party sharing may occur
          to ensure platform functionality, under strict confidentiality
          obligations.
        </p>

        <h4 className="text-xl font-semibold mb-1">2.4 Data Security</h4>
        <p className="mb-4">
          We use advanced security protocols but cannot guarantee absolute
          security due to the nature of online systems.
        </p>

        <h4 className="text-xl font-semibold mb-1">2.5 Cookies and Tracking</h4>
        <p className="mb-4">
          Cookies help improve user experience. You may adjust cookie
          preferences through your browser.
        </p>

        <h4 className="text-xl font-semibold mb-1">2.6 User Rights</h4>
        <p className="mb-4">
          You may contact us at legal@ergsec.com to access, update, or delete
          your personal information.
        </p>

        <h3 className="text-2xl font-semibold text-purple-300 mb-2">
          3. Governing Law
        </h3>
        <p className="mb-4">This Policy is governed by the laws of Finland.</p>

        <h3 className="text-2xl font-semibold text-purple-300 mb-2">
          4. Contact Information
        </h3>
        <p className="mb-4">
          For legal or privacy inquiries, contact us at legal@ergsec.com.
        </p>

        <h3 className="text-2xl font-semibold text-purple-300 mb-2">
          5. Acceptance
        </h3>
        <p className="mb-4">
          By using the platform, you accept these Terms & Conditions and Privacy
          Policy.
        </p>

        <div className="mt-8 text-lg">
          For full details on legal disclaimers, please review our{" "}
          <Link
            href="/documentation/legal-disclaimers"
            className="text-purple-400 underline hover:text-purple-200"
          >
            Legal Disclaimers
          </Link>
          .
        </div>
      </section>
    </Layout>
  );
}
