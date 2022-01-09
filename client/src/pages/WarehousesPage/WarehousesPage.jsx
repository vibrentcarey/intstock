import axios from "axios";
import React from "react";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import WarehouseListItem from "../../components/WarehouseListItem/WarehouseListItem";

// Warehouses Page

class WarehousesPage extends React.Component {
  state = {
    warehouseList: [],
    selectedWarehouse: null,
  };

  //Making an axios request to get the data
  componentDidMount() {
    axios
      .get("http://localhost:8080/warehouses")
      .then((result) => {
        console.log(result.data);
        this.setState({
          warehouseList: result.data,
        });
        console.log("WarehouseList", this.state.warehouseList);
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>Warehouse Page</h1>
        <WarehouseList warehouseList={this.state.warehouseList} />
      </div>
    );
  }
}

export default WarehousesPage;
