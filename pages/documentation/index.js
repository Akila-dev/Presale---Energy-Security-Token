// pages/documentation/index.js
import React from "react";
import Link from "next/link";
import { Layout, Jumbotron, CardDiv } from "../../components";
import text_data from "../../text_data";

export default function Documentation() {
  return (
    <Layout>
      {/* Jumbotron */}
      <Jumbotron
        page="Documentation"
        desc="Explore our comprehensive documentation covering everything from our
            full Whitepaper and Litepaper to risk disclosures and token purchase
            agreements. Each resource provides in-depth insights into ERGSEC's
            technology, business model, and regulatory framework."
        pb_md
      />

      <CardDiv
        animation="slide-in"
        start="85%"
        className="container grid-2 !gap-3 lg:!gap-5 -mt-3"
      >
        {text_data.DOCUMENTATION_LINKS.map(({ url, label, desc }, index) => (
          <Link
            href={url}
            key={index}
            className="link-card hover:!bg-dark backdrop-blur-lg flex flex-col gap-1 lg:gap-2 p-3 rounded border border-dark "
          >
            <span className="text-[1.4em] lg:text-[1.7em] text-gradient">
              {label}
            </span>
            <span>{desc}</span>
          </Link>
        ))}
      </CardDiv>
    </Layout>
  );
}
