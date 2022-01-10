import React, { Component } from "react";
import Modal from "../../components/Modal";
import axios from 'axios';
import WareHouseListItem from '../../WareHouseListItem/WareHouseListItem';
import Stock from "../../components/stock/Stock";

import Footer from '../../components/Footer/Footer';

import WarehouseDetailsPage from '../WarehouseDetailsPage/WarehouseDetailsPage';

import InventoryItem from '../../components/InventoryItem/InventoryItem';
import TopBar from "../../components/TopBar";
import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";
import EditWarehouseForm from "../../components/WarehouseForm/EditWarehouseForm";

class Dev extends Component {
  state = {
    showModal: false
  }
  showModal = () => {
    console.log('clicked');
    this.setState({ showModal: true })
  }
  hideModal = () => {
    this.setState({ showModal: false })
  }



  render() {
    return (
      <div>
        {/* <Stock instock={true} /> */}
        {/* <Modal title="Delete inventory item?" message="'Are you sure you want to delete this cannot be undone"/> */}
        {/* <WarehouseDetailsPage /> */}
        <Footer />
        {/* <Stock instock={true} /> */}
        <TopBar title='Television' showButton />
        {/* <Footer /> */}
        {/* <WareHouseListItem handleDelete={this.showModal} />
        {this.state.showModal && <Modal title="Delete inventory item?" message="'Are you sure you want to delete this cannot be undone" onClose={this.hideModal} onDelete={this.deleteInventoryItem} />}
        <button onClick={this.showModal}>click</button> */}
        {/* <WarehouseForm submitValue='save'/> */}
        <EditWarehouseForm />
      </div>

    );
  }
}

export default Dev

