import "../LabelValue/LabelValue.scss";
import Stock from "../../components/stock/Stock.js";

import React from "react";

const LabelValue = (props) => {
  return (
    <div className="labelvalue-container">
      <p className="labelvalue-container__label">{props.label}</p>
      {props.type === "component" ? (
        <Stock instock={props.value} />
      ) : (
        <p className="labelvalue-container__value">{props.value}</p>
      )}
    </div>
  );
};

export default LabelValue;
