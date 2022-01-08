import React, { Component } from "react";
import Modal from "../../components/Modal";
import Stock from "../../components/stock/Stock";

class Dev extends Component {
  render() {
    return (
      <div>
        <Stock instock={true} />
        <Modal/>
      </div>
    );
  }
}

export default Dev;
