// pages/media-kit.js
import React from "react";

import {
  FaDownload,
  FaFilePdf,
  FaImages,
  FaNewspaper,
  FaBookOpen,
  FaPalette,
} from "react-icons/fa";

import { Layout } from "../components";

export default function MediaKit() {
  return (
    <Layout>
      {/* Dark Gradient Background */}
      <section className="bg-gradient-to-b from-gray-900 to-black px-6 py-12">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Page Title & Intro */}
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-white">ERGSEC Media Kit</h2>
            <p className="text-lg text-gray-300 max-w-2xl">
              Find everything you need to accurately feature and represent
              ERGSEC in the media. Download our official logos, brand
              guidelines, high-resolution images, and press releases below. For
              additional inquiries, please contact our PR team at{" "}
              <a
                href="mailto:pr@ergsec.com"
                className="ml-1 text-green-400 underline hover:text-green-300"
              >
                pr@ergsec.com
              </a>
              .
            </p>
          </div>

          {/* Brand Assets Section */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-4">
              <FaImages className="text-green-400 text-2xl" />
              <h3 className="text-2xl font-semibold text-green-400">
                Brand Assets
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              Download the official ERGSEC logos in various formats and
              resolutions. Please adhere to our usage guidelines to maintain
              visual consistency.
            </p>

            {/* Logos Download Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center p-4 bg-green-900 rounded">
                <FaDownload className="text-green-400 text-3xl mr-4" />
                <div>
                  <p className="text-lg font-medium text-gray-300">
                    Logo Pack (PNG)
                  </p>
                  <a
                    href="/assets/logos/ergsec_logo_pack_png.zip"
                    download
                    className="text-green-400 underline hover:text-green-300 text-sm"
                  >
                    Download (ZIP, 5MB)
                  </a>
                </div>
              </div>

              <div className="flex items-center p-4 bg-green-900 rounded">
                <FaDownload className="text-green-400 text-3xl mr-4" />
                <div>
                  <p className="text-lg font-medium text-gray-300">
                    Logo Pack (SVG)
                  </p>
                  <a
                    href="/assets/logos/ergsec_logo_pack_svg.zip"
                    download
                    className="text-green-400 underline hover:text-green-300 text-sm"
                  >
                    Download (ZIP, 2MB)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Guidelines */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-4">
              <FaBookOpen className="text-green-400 text-2xl" />
              <h3 className="text-2xl font-semibold text-green-400">
                Brand Guidelines
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              Ensure correct usage of our logos, color palette, and typography
              by reviewing our comprehensive brand guidelines. These guidelines
              help maintain a consistent and professional brand image across all
              platforms.
            </p>
            <div className="flex items-center p-4 bg-green-900 rounded w-full md:w-1/2">
              <FaFilePdf className="text-red-500 text-3xl mr-4" />
              <div>
                <p className="text-lg font-medium text-gray-300">
                  Brand Guidelines
                </p>
                <a
                  href="/assets/brand-guidelines.pdf"
                  download
                  className="text-green-400 underline hover:text-green-300 text-sm"
                >
                  Download (PDF, 2MB)
                </a>
              </div>
            </div>
          </div>

          {/* Color Palette */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-4">
              <FaPalette className="text-green-400 text-2xl" />
              <h3 className="text-2xl font-semibold text-green-400">
                Color Palette
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              Our brand colors are an essential part of the ERGSEC identity.
              Below you’ll find the primary and secondary swatches with their
              respective HEX codes.
            </p>

            {/* Color Swatches */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {/* Primary */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-green-600 mb-2"></div>
                <p className="text-sm text-gray-200">#059669</p>
                <p className="text-xs text-gray-400">Green 600</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-green-700 mb-2"></div>
                <p className="text-sm text-gray-200">#047857</p>
                <p className="text-xs text-gray-400">Green 700</p>
              </div>
              {/* Secondary */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-700 mb-2"></div>
                <p className="text-sm text-gray-200">#1F2937</p>
                <p className="text-xs text-gray-400">Gray 800</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-green-900 border border-gray-600 mb-2"></div>
                <p className="text-sm text-gray-200">#ECFDF5</p>
                <p className="text-xs text-gray-400">Green 50</p>
              </div>
            </div>
          </div>

          {/* Press Releases */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-4">
              <FaNewspaper className="text-green-400 text-2xl" />
              <h3 className="text-2xl font-semibold text-green-400">
                Press Releases
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              Stay up-to-date with our official announcements and milestones.
              Each press release covers significant updates, partnerships, and
              business developments.
            </p>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-green-900 rounded">
                <FaFilePdf className="text-red-500 text-3xl mr-4" />
                <div>
                  <p className="text-lg font-medium text-gray-300">
                    Press Release #1
                  </p>
                  <span className="block text-sm text-gray-400">
                    January 2025
                  </span>
                  <a
                    href="/assets/press-release-01.pdf"
                    download
                    className="text-green-400 underline hover:text-green-300 text-sm"
                  >
                    Download (PDF)
                  </a>
                </div>
              </div>

              <div className="flex items-center p-4 bg-green-900 rounded">
                <FaFilePdf className="text-red-500 text-3xl mr-4" />
                <div>
                  <p className="text-lg font-medium text-gray-300">
                    Press Release #2
                  </p>
                  <span className="block text-sm text-gray-400">
                    March 2025
                  </span>
                  <a
                    href="/assets/press-release-02.pdf"
                    download
                    className="text-green-400 underline hover:text-green-300 text-sm"
                  >
                    Download (PDF)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Disclaimer */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-400">
              Usage Disclaimer
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              All logos, trademarks, and assets contained in this media kit are
              the sole property of ERGSEC. By downloading or using these
              materials, you agree to abide by our branding and licensing terms.
              Any unauthorized use, modification, or distribution is strictly
              prohibited.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
