import React from "react";

import { Heading, DetailsList } from "../../components";

const TextAndDetailsList = ({
  tag,
  title,
  desc,
  left,
  data,
  additionalClass,
  two_column_data,
}) => {
  return (
    <section
      className={`container ${additionalClass ? additionalClass : ""} ${
        two_column_data ? "grid-2-v2" : "grid-2"
      }`}
    >
      <div className={two_column_data ? "md:col-span-3" : "col-span-1"}>
        <Heading tag={tag} title={title} desc={desc} left={left} />
      </div>
      <div
        className={`"flex flex-col gap-1 ${
          two_column_data ? "md:col-span-4" : "col-span-1"
        }`}
      >
        <DetailsList data={data} two_colums={two_column_data} />
      </div>
    </section>
  );
};

export default TextAndDetailsList;
