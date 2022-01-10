import axios from "axios";
import React from "react";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import Modal from "../../components/Modal";
import TopBarSearch from "../../components/TopBarSearch";
import Button from "../../Button/Button";
import "./WarehousesPage.scss";

// Warehouses Page

class WarehousesPage extends React.Component {
  state = {
    warehouseList: [],
    selectedWarehouse: null,
    showModal: false,
    warehouseId: null,
    warehouseName: null,
  };

  showModal = (warehouseId, warehouseName) => {
    this.setState({
      showModal: true,
      warehouseId,
      warehouseName,
    });
  };
  hideModal = () => {
    this.setState({ showModal: false });
  };

  deleteWarehouse = () => {
    const url = `http://localhost:8080/warehouses/${this.state.warehouseId}`;
    axios
      .delete(url)
      .then((res) => {
        this.hideModal();
        this.getAllWarehouses();
      })
      .catch((err) => console.log(err));
  };

  getAllWarehouses() {
    axios
      .get("http://localhost:8080/warehouses")
      .then((result) => {
        this.setState({
          warehouseList: result.data,
        });
      })
      .catch((err) => console.log(err));
  }

  //Making an axios request to get the data
  componentDidMount() {
    this.getAllWarehouses();
  }

  render() {
    return (
      <div>
        {this.state.showModal && (
          <Modal
            title={`Delete ${this.state.warehouseName} warehouse?`}
            message={`Please confirm that you'd like to delete the ${this.state.warehouseName} from the list of warehouses. You won't be able to undo this action.`}
            onClose={this.hideModal}
            onDelete={this.deleteWarehouse}
          />
        )}
        <div className="warehouse__top">
          <TopBarSearch title={"Warehouses"} />
          <Button value={"+ Add New Warehouse"} />
        </div>
        <WarehouseList
          warehouseList={this.state.warehouseList}
          onClick={this.showModal}
        />
      </div>
    );
  }
}

export default WarehousesPage;
