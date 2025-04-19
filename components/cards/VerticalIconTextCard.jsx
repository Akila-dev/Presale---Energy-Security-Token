import React from "react";
import Link from "next/link";

const VerticalIconTextCard = ({ icon, title, desc, className, href }) => {
  return (
    <div className={`${className ? className : ""}`}>
      <div className="w-full h-full bg-dark rounded p-3 md:p-3 flex-v-center !justify-start backdrop-blur-lg border border-card">
        <div className="flex-center w-[4.3em] h-[4.3em] min-w-[4.3em] bg-card rounded-full backdrop-blur-xl">
          <div className="text-[1.5em]">{icon}</div>
        </div>
        <div className="flex flex-col">
          <h3 className="card-title !text-[1.6em]">{title}</h3>
          <Link href={href} className="hover:text-neon transform-700">
            {desc}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerticalIconTextCard;
