import React from "react";
import { Layout } from "../../components";

export default function Whitepaper() {
  return (
    <Layout>
      <div className="relative bg-black text-white min-h-screen overflow-x-hidden">
        {/* Background overlay with subtle animation */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80 bg-fixed animate-pulse-slow"
          style={{
            backgroundImage: "url('/images/hero-background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        ></div>

        <section className="max-w-4xl mx-auto px-6 py-16 backdrop-blur-md bg-black/70 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold mb-10 text-center border-b border-gray-700 pb-4">
            Renewable Energy Security Token Whitepaper
          </h1>

          <div className="space-y-8 text-lg leading-relaxed">
            <div>
              <h2 className="text-2xl font-semibold">1. Abstract</h2>
              <p>
                xxx xxxxxxxxx xxxxxx xxxxx xxxxx (xxxxxx), xxxxx xx xxx xxxxxx
                xxxxxxxxxx, xxxx xx xxxxxxxxxxxxx xxxxxxxxx xxxxxx xxxxxxxxxx
                xxx xxxxxxxxxxxx xx xxxxxxxx xxxx xxx xxxxx xxxxxxxxxxxx xxxxxx
                xxxxx xxxxxxxx. xxxxxxx xx-xxxxxx xxxxxxxxx, xx xxxxxxxx xxxxxx
                xxxxx, xxxxxxxxxxxxx xxxxxxxx xxxxxx xxxx xxxxxxxx xxxxx
                xxxxxxxxxx xxxxxxxxx xxx xxxxx xxxxxxxxx. xxx xxxxxxx xxxxxx
                xxxxx xxxxxxx xxxxxxxxxxx xxxxxxx xxxxxxxxxx, xxxxxxx xxxxxxx,
                xxx x xxxxxx xxx xxxxxxxxx, xxxxxxxx x xxxxxxxxxxx xxxxxx xxxxxx
                xxxx xxxxx xxxxxxxx.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">2. Introduction</h2>
              <p>
                xxx xxxxxx xxxxxxxxx xxxxxx xxxxxx xx xxxxxxx xxxxxxx xxx xx
                xxxxxxx xxxxxxxx xxx xxxxxxxxxx. xxxxxxx, xxxxxxxxxx xxxxxx,
                xxxx xx xxxxxx xxxxxxxx, xxx xxxxxxxxxx xxxxxxxx xxx xxxxxxxxxx
                xxxxxx xxxxxx xxxxxxxxxxxxxx. xxxxxxxxxx xxxxxxxxxx xxxxxx
                xxxxxxxxxxx, xxxxxxxxx xxxxxxxxx, xx xxxxx xxxxx, xxxxxxxx
                xxxxxxxxxxxxx xxxxxx xxxxxxxx, xxxxxxxxxxxx xxx xxxxxxxxxx
                xxxxxxxx.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">
                3. Legal and Regulatory Information
              </h2>
              <ul className="list-disc pl-5">
                <li>
                  xxx xxxxxx xxxxx xxxx xx xxxxx xxxxxxxxx xxxx xxx xx’s xxxxxxx
                  xx xxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxx (xxxxx x) xxxxxxxxxxx
                </li>
                <li>
                  xxxxx xxxxxxxxxxxxxx: xxxxxxxx xxxxx (xxxxxxxx, xxxxxxxxxx,
                  xxxxxx xxxxxxxxxxxx)
                </li>
                <li>
                  xxxxxxx xxxxxx xxxxxxx: xxxxxx xx, #xxxxxxx xx: xxxx,
                  xxxxxxxxxx xx xxxxxxx
                </li>
                <li>
                  xxxxxxxxxx: xxxxx xxxxxxx xx xxx xxx xxxxxx xx xxxxxx xx xxx
                  xxxxxxx
                </li>
                <li>
                  xxxxxxxxxx xxxxx xxxxxxx xxxxxxxxxxx xxxxxx xxxxxxxxxxxx,
                  xxxxxxxxxx xxxxxxx, xxxxxxxxxxxx xxxxx, xxxxx xxxxxxx xxx
                  xxxxxxxxx xxxxxxxxxx
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">4. Platform Overview</h2>
              <p>
                xxx xxxxxx xxxxx xxxxxxxx xxx xxxxxx xxxxxxxxxx, xxxxxxxxx xxxxx
                xxxxxxxxxxx xxx xxx xxxxx xxxxxxxxx, xxxxxxxx xxxxxxxxx xx
                xxxxxxxx xxxxxxx xxxxxx xxxxxxx xxxxxxxxxx. xx xxxxxxxxxx xxxx
                xxxxxxxxxxx xxxxxx xxxxxxx, xxxxxxxxx xx-xxxxxx xxxxxxxxx xxx
                xxxxxxx xxxxxx xxxxxxxxxxxxx, xxx xxxxxxxx xxxxxxxxxx xxxxxxxxxx
                xxxxxxxx.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">5. System Architecture</h2>
              <ul className="list-disc pl-5">
                <li>
                  xxxxxxxxxx: xxxxxx xxxxxxxxxx (xxxx-xxxxx, xxxxxxxx, xxxxxx)
                </li>
                <li>
                  xxxxx xxxxxxxxx: xxxxxx xxxxx xxxxxxx, xxxxxxx xxx xxxxxx
                  xxxxxxxxx
                </li>
                <li>
                  xxxx xxxxxxxxxx: xxxxxx xxx xxxxxx xxxxxxxxx xxx xxxxx xxxxxx
                  xxxxxx xxxx xxxxxx xxxxxx xxxx xxxxxx xxxxxxxxxxxx
                </li>
                <li>
                  xxxxxx xxxx: xxxxxxxxxxx xxx xxxxxxxxxxxxxxxx xxxx xxxxxxxx
                  xxx xxxxxx xxxxxx xxxxx
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">6. Tokenomics</h2>
              <ul className="list-disc pl-5">
                <li>xxxxx xxxxx xxxxxx: xx xxxxxxx xxxxxx</li>
                <li>
                  Distribution:
                  <ul className="list-disc pl-5">
                    <li>xx% xxxxxxxxxx xxxx xxx xxxxxxxx (xxxxx x xxx-xxxx)</li>
                    <li>
                      xx% xxxxxxxxxxxx xx xxxxx xxxxxx xxxxx xxxxxxxx (xxxxx x)
                    </li>
                    <li>
                      xx% xxxxxxxxxxxxx xx xxxxx xxxxx xxxxxx xxxxx xxxxxxxx
                      (xxxxx x)
                    </li>
                    <li>xx% xxx xxxxxx (xx xxxxx xxxx)</li>
                    <li>x% xxx xxxxxxxxx xxxxxxxxxx</li>
                    <li>x% xxxxxxx xxxxxxx</li>
                    <li>x% xxxxxxxx xxx xxxxxxx xxxxxxxx</li>
                  </ul>
                </li>
                <li>
                  xxxxxxxx xxxxxxxxxx: xxxxxx xxxx xxxxxx xxxxx xx xxxxxxxxxxxx
                  xx xxxxx xxxxxxx
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">7. Governance Model</h2>
              <p>
                xxxxx xxxxxxx xxxx xxxxxxxxxx xxxxxx xxxxxxxx xxxxxxx xxxxxx
                xxxxxx xxxxxx xx xxxxx xxxxxx xx xxxxxxxx xxxxxx xxxxxx xxx
                xxxxxxxxxx xx xxxxxx xxxxxx, xxxxxxxx xxxxxxx, xxx xxxxxxxxxx xx
                xxxxx xxxxxx, xxxxxx xx xxxxx xxxxxxx. xxxxxxxxxxxxxx xx
                xxxxxxxxxxxx xxx xxxxx, xxx, xxxxxxxx, xxx x xxxxxx xxxxxx.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">
                8. Community Engagement
              </h2>
              <p>
                xxxxxx xxxxxxx xxxxxx xxxxx xxxxxxx xxxxx xxxxxxx xxx xxxxxxxx
                xxxxxxxxxx xxxxxxxxxxx. x% xx xxx xxxxx xxxxx xxxxxx xx
                xxxxxxxxxx xx xxxxxxx xxx xxxxxxxxxxx xxxx xxxxxxxxxxxxxx.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">
                9. Security Considerations
              </h2>
              <p>
                xxxxxx xxxxxxx xxxx xxxxxxxxx xx xxxxxxxxxxxxx, xxxxxxxx xxxxxxx
                xxxxxx xxx xxxxxxxxxxx, xxx xxxxxx xxxxxxxxxxx xxxxx xx xxxxx
                xxxx xx xxx xxxxxxxxxxx xxxxxxxxx.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">
                10. Use Cases and Applications
              </h2>
              <p>
                xxxxxx xxxxxxxxxx, xxxxxxx xxxxxxxxxxxxx, xxxxxxxxxxxx xxxx
                xxxxxx xxxxxxxxx, xxx xxxxxxxx xxxxxxx xxxxxxxx xxxx xxxxxxx
                xxxxxx xxxxxxxxxxxxxx xxx xxx xxx xxxxx.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">
                11. Financial and Economic Details
              </h2>
              <p>
                xxxxxx xxxxx xxx xxxx xxxxxxxxxxx xxx xxxxxxxxxxxxxx xxx
                xxxxxxxxxx. xxxxxxx xxxxxxxx xxxx-xxxxx xxx xxxxx xxxxx.
                xxxxxxxxx xxxxxxx xxxxxx xxxxxxxxxxxx.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">12. Roadmap</h2>
              <ul className="list-disc pl-5">
                <li>xx xxxx: xxxxxxx xxxxx xxxxx (xxx xxxxxxx)</li>
                <li>xx xxxx: xxxxx xxx xxxxx x xxxxxxx</li>
                <li>xx xxxx: xxxxxxxxxxxx xx xxxxx xxxxxxx</li>
                <li>xx xxxx: xxxxxxxxxx xxxxx</li>
                <li>xx xxxx: xxxxxxxxxx xxxxxx</li>
                <li>xx xxxx: xxxxx xxxxxx xxxxxxxxxxxx</li>
                <li>xx xxxx - xx xxxx: xxxxxx xxxxxxx</li>
                <li>xx xxxx: xxxxxx xxxxxx xxxxxxxxxxxx</li>
                <li>xx xxxx: xxxxxxxx xxx xxxxx xxxxxxx</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">
                13. Team and Company Information
              </h2>
              <p>
                xxx: xxxxxx'x xx xxxxxxxxxx, xx+ xxxxx xxxxxxxx xxxxxxxxxxx.
                xxx: xxx, xx+ xxxxx xxxxxxxxxxx. xxxxxxxx xxxxxx: xxx, xx+ xxxxx
                xx xxxxxxxxxxxxxx. xxxxxxx: xxxxxx xx, #xxxxxxx xx: xxxx,
                xxxxxxx.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">14. ESG Commitment</h2>
              <p>
                xxxxxx xxx xxxxxxxxxx, xxxxxxx xxxxxxxxxxx, xxx xxxxxxxxxxxxx
                xxxxxxxxxxxxxx xxxxxx xxx xxxxxx xxx xxxxxxxxx.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">15. Conclusion</h2>
              <p>
                xxx xxxxxx xxxxxxx xxxxxxxx xxxxxxxxxxxxx xxx xxxxxxxxx xxxxxxxx
                xxx xxxxxx xxxxxxxxxx xxxxxxxxxxxxxxxx, xxxxxxxxxx, xxx xxx
                xxxxxxxxx.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">
                16. Appendices and Legal Disclaimers
              </h2>
              <p>
                xxxxxxxx xxxx xxxxxxxxxxx, xxxxxxxxxxxxxxx xxxxxxxxx, xxx
                xxxxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxxxxxx xxxx xxxxxxx.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
