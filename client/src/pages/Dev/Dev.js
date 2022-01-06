import React, { Component } from "react";
import Stock from "../../components/stock/Stock";

class Dev extends Component {
  render() {
    return (
      <div>
        <Stock instock={true} />
      </div>
    );
  }
}

export default Dev;
