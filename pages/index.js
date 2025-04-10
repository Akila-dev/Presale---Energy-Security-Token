// pages/index.js
import React from "react";

import { Layout, Hero } from "../components";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Additional content below Hero */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose Our Project?</h2>
        <p className="mb-4">
          Xxxx xxx xxxx. Xxxx xxx xxxx. Xxxx xxx xxxx. Xxxx xxx xxxx.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-neon hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Feature One</h3>
            <p className="text-sm">Xxxx xxx xxxx. Xxxx xxx xxxx.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-neon hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
            <p className="text-sm">Xxxx xxx xxxx. Xxxx xxx xxxx.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-neon hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
            <p className="text-sm">Xxxx xxx xxxx. Xxxx xxx xxxx.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
