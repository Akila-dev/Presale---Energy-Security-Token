import {
  FaTelegramPlane,
  FaDiscord,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

export const CONTACT_DETAILS = {
  mail: "support@ergsec.com",
  phone: "+123 456 7890",
  social_media: [
    {
      icon: <FaTelegramPlane />,
      link: "https://t.me/ergsec_support",
    },
    {
      icon: <FaDiscord />,
      link: "https://discord.gg/ergsec",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/company/ergsec",
    },
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/ergsec",
    },
  ],
};
