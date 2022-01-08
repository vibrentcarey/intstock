import React, { Component } from "react";
import Modal from "../../components/Modal";

import WareHouseListItem from '../../WareHouseListItem/WareHouseListItem';
import Stock from "../../components/stock/Stock";
import Footer from '../../components/Footer/Footer';

class Dev extends Component {
  render() {
    return (
      <div>
        <Stock instock={true} />
        <Modal/>
      <Footer />
      </div>
      
    );
  }
}

export default Dev

