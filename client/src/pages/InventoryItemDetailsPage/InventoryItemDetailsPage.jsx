import React from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import LabelValue from "../../components/LabelValue/LabelValue";
import back from "../../assets/arrow_back-24px.svg";
import "../InventoryItemDetailsPage/InventoryItemDetailsPage.scss";

// Inventory Item Details Page
class InventoryItemDetailsPage extends React.Component {
  state = {
    redirectToEdit: false,
    details: null
  };

  getInventoryItemDetails = (id) => {
    const url = `http://localhost:8080/inventories/${id}`;

    axios
      .get(url)
      .then((res) => {
        this.setState({
          details: res.data
        });
      })
      .catch((err) => {
        console.log("error in axios", err);
      });
  };

  // getting inventory item details from api upon website mount
  componentDidMount() {
    // invoking getInventoryItemDetails function to get all inventory item details
    this.getInventoryItemDetails(this.props.match.params.inventoryItemId);
  }

  handleEditButtonClick = () => {
    this.setState({
      redirectToEdit: true
    });
  };

  render() {
    if (this.state.redirectToEdit) {
      return (
        <Redirect
          to={`/edit-inventory-item/${this.props.match.params.inventoryItemId}`}
        />
      );
    }

    return (
      <main className="inventory-item-details">
        <div className="inventory-item-details__top-section">
          <section className="inventory-item-details__heading">
            <div className="inventory-item-details__heading-left">
              <Link to="/inventory">
                <img
                  src={back}
                  alt="back"
                  className="inventory-item-details__back-image"
                />
              </Link>

              <h1 className="inventory-item-details__title">Television</h1>
            </div>
            <div className="inventory-item-details__heading-right">
              <Button
                type="edit"
                value="Edit"
                onClick={this.handleEditButtonClick}
              />
            </div>
          </section>
        </div>
        {this.state.details && (
          <section className="inventory-item-details__bottom-section">
            <div className="inventory-item-details__container-left">
              <LabelValue
                label="ITEM DESCRIPTION"
                value={this.state.details.description}
              />
              <LabelValue
                label="CATEGORY"
                value={this.state.details.category}
              />
            </div>

            <div className="inventory-item-details__container-right">
              <div className="inventory-item-details__status">
                <LabelValue
                  label="STATUS"
                  value={this.state.details.status}
                  type="stock"
                />
                <LabelValue
                  label="QUANTITY"
                  value={this.state.details.quantity}
                />
              </div>
              <LabelValue
                label="WAREHOUSE"
                value={this.state.details.warehouseName}
              />
            </div>
          </section>
        )}
        ;
      </main>
    );
  }
}

export default InventoryItemDetailsPage;
