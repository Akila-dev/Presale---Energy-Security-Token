// pages/contact/index.js
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { Layout } from "../components";

// REACT ICONS
import {
  FaEnvelope,
  FaPhone,
  FaTelegramPlane,
  FaDiscord,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

export default function Contact() {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please complete the CAPTCHA before submitting.");
      return;
    }
    // TODO: Add your form submission logic here (e.g., call an API)
    alert("Message sent!");
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <Layout>
      {/* Page Background & Container */}
      <section className="bg-gradient-to-b from-gray-900 to-black px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl font-bold mb-8 text-white">
            Contact &amp; Support
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form Card */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-8">
              <h3 className="text-3xl font-semibold mb-4 text-green-400">
                Get in Touch
              </h3>
              <p className="text-lg mb-6 text-gray-300">
                Have questions or need assistance? Fill out the form below, and
                our support team will respond as soon as possible.
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-400 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className="p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-green-500 transition text-gray-200"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-400 mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-green-500 transition text-gray-200"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-400 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="How can we help you?"
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-green-500 transition text-gray-200"
                    rows="5"
                    required
                  ></textarea>
                </div>

                {/* ReCAPTCHA */}
                <div className="mt-4">
                  <ReCAPTCHA
                    sitekey="YOUR_RECAPTCHA_SITE_KEY"
                    onChange={handleCaptchaChange}
                  />
                </div>

                <button
                  type="submit"
                  className="bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700 transition font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Support Channels */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-8">
              <h3 className="text-3xl font-semibold mb-4 text-green-400">
                Support Channels
              </h3>
              <p className="text-lg mb-6 text-gray-300">
                Prefer another method? Reach us via any of these platforms:
              </p>

              <ul className="space-y-4 text-lg text-gray-300">
                {/* Email */}
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-green-600" />
                  <span>
                    Email:{" "}
                    <a
                      href="mailto:support@ergsec.com"
                      className="text-green-600 underline"
                    >
                      support@ergsec.com
                    </a>
                  </span>
                </li>

                {/* Phone */}
                <li className="flex items-center gap-3">
                  <FaPhone className="text-green-600" />
                  <span>+123 456 7890</span>
                </li>

                {/* Telegram */}
                <li className="flex items-center gap-3">
                  <FaTelegramPlane className="text-green-600" />
                  <span>
                    <a
                      href="https://t.me/ergsec_support"
                      className="text-green-600 underline"
                    >
                      @ergsec_support
                    </a>
                  </span>
                </li>

                {/* Discord */}
                <li className="flex items-center gap-3">
                  <FaDiscord className="text-green-600" />
                  <span>
                    <a
                      href="https://discord.gg/ergsec"
                      className="text-green-600 underline"
                    >
                      Join Our Server
                    </a>
                  </span>
                </li>

                {/* LinkedIn */}
                <li className="flex items-center gap-3">
                  <FaLinkedinIn className="text-green-600" />
                  <span>
                    <a
                      href="https://www.linkedin.com/company/ergsec"
                      className="text-green-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </span>
                </li>

                {/* Facebook */}
                <li className="flex items-center gap-3">
                  <FaFacebookF className="text-green-600" />
                  <span>
                    <a
                      href="https://www.facebook.com/ergsec"
                      className="text-green-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
