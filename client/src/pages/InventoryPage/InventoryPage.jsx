import React from "react";
import axios from "axios";
import InventoryList from "../../components/InventoryListItem/InventoryListItem";

// Inventory Page
class InventoryPage extends React.Component {
  state = {
    inventoryList: [],
  };

  //Making an axios request to get the Inventory data
  componentDidMount() {
    axios
      .get("http://localhost:8080/inventories")
      .then((result) => {
        console.log(result.data);
        this.setState({
          inventoryList: result.data,
        });
        console.log("Inventory_List", this.state.inventoryList);
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>Inventory List</h1>
        <InventoryList inventoryList={this.state.inventoryList} />
      </div>
    );
  }
}

export default InventoryPage;
