import "../LabelValue/LabelValue.scss";
import Stock from "../../components/stock/Stock.js";

import React from "react";

const LabelValue = (props) => {
  return (
    <div className="label-value-container">
      <p className="label-value-container__label">{props.label}</p>
      {props.type === "stock" ? (
        <div className="label-value-container__stock">
          <Stock instock={props.value === "In Stock"} />
        </div>
      ) : (
        <p className="label-value-container__value">{props.value}</p>
      )}
    </div>
  );
};

export default LabelValue;
