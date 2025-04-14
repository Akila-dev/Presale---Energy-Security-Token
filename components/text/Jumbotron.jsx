import React from "react";

const Jumbotron = ({ page, desc, pb_lg }) => {
  return (
    <section className={`jumbotron container-x ${pb_lg ? "!pb-[10em]" : ""}`}>
      <div className="flex-center flex-col max-w-text !gap-1">
        <h2 className="">{page}</h2>
        <p className="">{desc}</p>
      </div>
    </section>
  );
};

export default Jumbotron;
