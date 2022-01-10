import React from "react";
import axios from "axios";
import InventoryList from "../../components/InventoryList/InventoryList";
import TopBarSearch from "../../components/TopBarSearch";
<<<<<<< HEAD
import Button from "../../Button/Button";
=======
import CategoryBar from '../../components/CategoryBar';
import Button from "../../Button/Button";
import './InventoryPage.scss';
>>>>>>> develop

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
<<<<<<< HEAD
      <div>
        <TopBarSearch title={"Inventory"} />
        <Button value={"+ Add New Warehouse"} />
=======
      <div className="topbar">
        <div className="topbar__search">
        <TopBarSearch title={"Inventory"} className="topbar__item"/>
        <Button type='primary' value='+Add New Item'/>
        </div>
        <CategoryBar categories={['inventory', 'category','status','quantity','actions']}/>
>>>>>>> develop
        <InventoryList inventoryList={this.state.inventoryList} />
      </div>
    );
  }
}

export default InventoryPage;
