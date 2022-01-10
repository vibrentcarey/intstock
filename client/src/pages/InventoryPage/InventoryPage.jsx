import React from "react";
import axios from "axios";
import InventoryList from "../../components/InventoryList/InventoryList";
import TopBarSearch from "../../components/TopBarSearch";

// Inventory Page
class InventoryPage extends React.Component {
  state = {
    inventoryList: [],
  };

  //Making an axios request to get the Inventory data
  componentDidMount() {
    axios
      .get("http://localhost:8080/inventory")
      .then((result) => {
        console.log(result.data);
        this.setState({
          inventoryList: result.data,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <TopBarSearch title={"Inventory"} />
        <InventoryList inventoryList={this.state.inventoryList} />
      </div>
    );
  }
}

export default InventoryPage;
