import React from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import LabelValue from "../../components/LabelValue/LabelValue";
import back from "../../assets/arrow_back-24px.svg";
import "../InventoryItemDetailsPage/InventoryItemDetailsPage.scss";

const dummyInventoryItem = {
  id: "9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3",
  warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
  warehouseName: "Manhattan",
  itemName: "Television",
  description:
    'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
  category: "Electronics",
  status: "In Stock",
  quantity: 500
};

// Inventory Item Details Page
class InventoryItemDetailsPage extends React.Component {
  state = {
    redirectToHome: false,
    details: dummyInventoryItem
  };

  handleEditButtonClick = () => {
    this.setState({
      redirectToHome: true
    });
  };

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to={`/edit-inventory-item/${this.state.details.id}`} />;
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

        <section className="inventory-item-details__bottom-section">
          <div className="inventory-item-details__container-left">
            <LabelValue
              label="ITEM DESCRIPTION"
              value={this.state.details.description}
            />
            <LabelValue label="CATEGORY" value={this.state.details.category} />
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
      </main>
    );
  }
}

export default InventoryItemDetailsPage;
