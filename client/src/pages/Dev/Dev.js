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
        <Modal title="Delete inventory item?" message="'Are you sure you want to delete this cannot be undone"/>
      <Footer />
      </div>
      
    );
  }
}

export default Dev

