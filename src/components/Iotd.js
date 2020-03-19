import React from "react";

const Iotd = ({ iotd }) => {
  return (
    <div>
      <h2>{iotd.title}</h2>
      <img src={iotd.url} />
      <p>{iotd.explanation}</p>
      <span>
        {iotd.copyright}, {iotd.date}
      </span>
    </div>
  );
};

export default Iotd;
