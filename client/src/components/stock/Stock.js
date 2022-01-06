import React, { Component } from "react";
import "./Stock.scss";

class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inStock: props.instock,
    };
  }
  render() {
    if (this.state.inStock) {
      return <div className="in-stock"> IN STOCK</div>;
    } else {
      return <div className="out-of-stock"> OUT OF STOCK </div>;
    }
  }
}

export default Stock;
