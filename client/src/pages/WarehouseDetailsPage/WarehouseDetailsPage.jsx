<<<<<<< HEAD
import React, { Component } from "react";
import TopBar from '../../components/TopBar';
import { withRouter } from "react-router-dom";
=======
import React,{Component} from "react";
>>>>>>> develop
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
<<<<<<< HEAD
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
    // Please check router props!!!!
    let warehouseId = this.props.match.params.warehouseId
    console.log(warehouseId);
    this.fetchWarehouse(warehouseId)
=======
    .then(res => {
      this.setState({inventories: res.data})
    }) 
    .catch(err => {
      return err;
    }) 
  }

  // initial inventory list fetch
  componentDidMount(){
    let warehouseId = this.props.match.params.warehouseId
>>>>>>> develop
    this.fetchInventories(warehouseId)
  }


  render() {
    return (
      <>
        <TopBar title={this.state.warehouse.name} />
        <CategoryBar categories={['inventory', 'category', 'status', 'quantity', 'actions']} />

        <WarehouseInventory inventoryList={this.state.inventories} />
      </>
    );
  };
}

export default WarehouseDetailsPage;
