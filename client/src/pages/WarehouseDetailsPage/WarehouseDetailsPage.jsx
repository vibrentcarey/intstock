import React, { Component } from "react";
import TopBar from '../../components/TopBar';
import { withRouter } from "react-router-dom";
import WarehouseInventory from "../../components/WarehouseInventory/WarehouseInventory";
import CategoryBar from '../../components/CategoryBar';
import axios from 'axios';


class WarehouseDetailsPage extends Component {
  state = {
    inventories: [],
    warehouse: []
  }

  fetchWarehouse = (warehouseId) => {
    axios.get(`http://localhost:8080/warehouses/${warehouseId}`)
      .then(res => {
        console.log(res.data)
        this.setState({ warehouse: res.data })
      })
      .catch(err => {
        return err;
      })
  }
  // pass warehouse id to endpoint url
  fetchInventories = (warehouseId) => {
    axios.get(`http://localhost:8080/warehouses/${warehouseId}/inventories`)
      .then(res => {
        console.log(res.data)
        this.setState({ inventories: res.data })

      })
      .catch(err => {
        return err;
      })
  }

  // initial inventory list fetch
  componentDidMount() {
    let warehouseId = this.props.match.params.warehouseId
    this.fetchInventories(warehouseId)
    this.fetchWarehouse(warehouseId)
  }


  render() {

    const { warehouse } = this.state

    if (this.state.warehouse.length === 0) {
      return <p className="container__message">...Loading page...</p>;
    }

    return (
      <>
        <TopBar title={warehouse.name} />
        <CategoryBar categories={['inventory', 'category', 'status', 'quantity', 'actions']} />

        <WarehouseInventory inventoryList={this.state.inventories} />
      </>
    );
  };
}

export default WarehouseDetailsPage;
