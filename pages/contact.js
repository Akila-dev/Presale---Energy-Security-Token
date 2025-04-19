// pages/contact/index.js
import React, { useState } from "react";

import {
  Layout,
  Jumbotron,
  ContactForm,
  Heading,
  VerticalIconTextCard,
  CardDiv,
  SocialIcons,
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

      <section className="container-x grid-2 -mt-[7em] relative pb-10">
        <ContactForm />
        <div className="pt-3 md:pt-[9em] space-y-5">
          <Heading
            tag="contact us"
            title="Don't Hesitate to Contact Us"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            left
          />
          <CardDiv
            animation="slide-in"
            once
            start="90%"
            className="grid-2 !gap-3"
          >
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
          </CardDiv>

          <div className="flex-v-center flex-wrap justify-between border-t border-card/20 pt-4">
            <h3>Social Media:</h3>
            <SocialIcons />
          </div>
        </div>
      </section>
    </Layout>
  );
}
