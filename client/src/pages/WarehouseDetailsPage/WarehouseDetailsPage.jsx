import React, { Component } from "react";
import TopBar from '../../components/TopBar';
import CategoryBar from '../../components/CategoryBar';
import WarehouseInventory from "../../components/WarehouseInventory/WarehouseInventory";
import axios from 'axios';


class WarehouseDetailsPage extends Component {
  state = {
    inventories: [],
    warehouse: []
  }

  // fetch function to update state for warehouse
  fetchWarehouse = (warehouseId) => {
    axios.get(`http://localhost:8080/warehouses/${warehouseId}`)
      .then(res => {
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

  // initial warehouse details and inventory list fetch
  componentDidMount() {
    let warehouseId = this.props.match.params.warehouseId
    this.fetchInventories(warehouseId)
    this.fetchWarehouse(warehouseId)
  }

  render() {

    if (this.state.warehouse.length === 0) {
      return <p className="container__message">...Loading page...</p>;
    }

    const details = [
      { heading: "Warehouse Address", info: `${this.state.warehouse.address},`, content: `${this.state.warehouse.city}, ${this.state.warehouse.country}` },
      { heading: "Contact Name", info: this.state.warehouse.contact.name, content: `${this.state.warehouse.contact.position}` },
      { heading: "Contact Information", info: this.state.warehouse.contact.phone, content: `${this.state.warehouse.contact.email}` }
    ]
    return (
      <>
        <TopBar title={this.state.warehouse.name} details={details} showButton={true} />
        <CategoryBar categories={['inventory', 'category', 'status', 'quantity', 'actions']} />
        <WarehouseInventory inventoryList={this.state.inventories} />
      </>
    );
  };
}

export default WarehouseDetailsPage;
