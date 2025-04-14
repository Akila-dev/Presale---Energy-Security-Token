// pages/contact/index.js
import React, { useState } from "react";
import Link from "next/link";

import {
  Layout,
  Jumbotron,
  ContactForm,
  Heading,
  VerticalIconTextCard,
} from "../components";

// REACT ICONS
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import text_data from "../text_data";

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
      {/* Jumbotron */}
      <Jumbotron page="Contact" desc="Contact Support" pb_lg />

      <section className="container-x grid-2 -mt-[7em] md:-mt-[6em] relative">
        <ContactForm />
        <div className="pt-3 md:pt-[9em] space-y-5">
          <Heading
            tag="contact us"
            title="Don't Hesitate to Contact Us"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            left
          />
          <div className="grid-2 !gap-3">
            <VerticalIconTextCard
              icon={<FaEnvelope />}
              title="Email Us"
              desc={text_data.CONTACT_DETAILS.mail}
              href={`mailto:${text_data.CONTACT_DETAILS.mail}`}
            />
            <VerticalIconTextCard
              icon={<FaPhoneAlt />}
              title="Phone"
              desc={text_data.CONTACT_DETAILS.phone}
              href={`tel:${text_data.CONTACT_DETAILS.phone}`}
            />
          </div>

          <div className="flex-v-center flex-wrap justify-between border-t border-card/20 pt-4">
            <h3>Social Media:</h3>
            <div className="flex-v-center !gap-1">
              {text_data.CONTACT_DETAILS.social_media.map(
                ({ link, icon }, i) => (
                  <Link
                    key={i}
                    href={link}
                    className="w-[3.5em] h-[3.5em] min-w-[3.5em] flex-center rounded-full bg-card hover:bg-dark hover:text-neon"
                    target="_blank"
                  >
                    <span className="text-[1.5em]">{icon}</span>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
