import React from "react";

const Jumbotron = ({ page, desc, pb_lg, pb_md }) => {
  return (
    <section
      className={`jumbotron container-x ${
        pb_lg ? "!pb-[10em]" : pb_md ? "!pb-[6em] lg:!pb-[5.5em]" : ""
      }`}
    >
      <div className="flex-center flex-col max-w-text !gap-1 text-center">
        <h2 className="">{page}</h2>
        <p className="">{desc}</p>
      </div>
    </section>
  );
};

export default Jumbotron;
