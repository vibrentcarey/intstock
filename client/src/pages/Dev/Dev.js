import React, { Component } from "react";
import Modal from "../../components/Modal";
import EditWarehousePage from "../EditWarehousePage/EditWarehousePage";

import WareHouseListItem from '../../WareHouseListItem/WareHouseListItem';
import Stock from "../../components/stock/Stock";

import WareHouseInventoryList from '../../components/WareHouseInventoryList/WareHouseInventoryList';
import EditInventoryItemPage from '../EditInventoryItemPage/EditInventoryItemPage';
import AddInventoryItemPage from '../AddInventoryItemPage/AddInventoryItemPage';


class Dev extends Component {
  render() {
    return (
      <div>
        {/* <Stock instock={true} />
        <Modal title="Delete inventory item?" message="'Are you sure you want to delete this cannot be undone"/>
      <Footer /> */}

        <EditInventoryItemPage />
        {/* <AddInventoryItemPage /> */}
      </div>

    );
  }
}

export default Dev

