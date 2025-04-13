import React from "react";

const Jumbotron = ({ page, desc }) => {
  return (
    <section className="jumbotron container-x">
      <div className="flex-center flex-col max-w-text !gap-1">
        <h2 className="">{page}</h2>
        <p className="">{desc}</p>
      </div>
    </section>
  );
};

export default Jumbotron;
