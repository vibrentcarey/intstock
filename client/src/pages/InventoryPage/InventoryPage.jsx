import React from "react";
import axios from "axios";
import InventoryList from "../../components/InventoryList/InventoryList";
import TopBarSearch from "../../components/TopBarSearch";
import CategoryBar from "../../components/CategoryBar";
import Button from "../../Button/Button";
import Card from "../../components/Card/Card";
import "./InventoryPage.scss";
import { Link } from "react-router-dom";

// Inventory Page
class InventoryPage extends React.Component {
  state = {
    inventoryList: []
  };

  //Making an axios request to get the Inventory data
  componentDidMount() {
    axios
      .get("http://localhost:8080/inventory")
      .then((result) => {
        this.setState({
          inventoryList: result.data
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <Card>
        <div className="topbar">
          <div className="topbar__search">
            <TopBarSearch title={"Inventory"} className="topbar__item" />
            <Link to={`/add-inventory`}>
              <Button type="primary" value="+ Add New Item" />
            </Link>
          </div>
          <CategoryBar
            categories={[
              "inventory item",
              "category",
              "status",
              "quantity",
              "actions"
            ]}
          />
          <InventoryList inventoryList={this.state.inventoryList} />
        </div>
      </Card>
    );
  }
}

export default InventoryPage;
