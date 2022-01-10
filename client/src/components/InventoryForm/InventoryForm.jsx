import "./InventoryForm.scss";
import React, { Component } from "react";
import axios from "axios";
import errorIcon from "../../assets/error-24px.svg";
import Button from "../../Button/Button";

let categoriesList = [
  "Accessories",
  "Apparel",
  "Electronics",
  "Gear",
  "Health"
];

class InventoryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      warehouseList: [],
      itemName: "",
      description: "",
      category: "",
      quantity: 0,
      warehouseID: "",
      warehouseName: "",
      form: {
        name: true,
        description: true,
        category: true,
        quantity: true,
        warehouseID: true
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let status = "In Stock";
    if (this.state.quantity === 0) {
      status = "Out of Stock";
    }

    const warehouse = this.state.warehouseList.find(
      (item) => item.id === this.state.warehouseID
    );
    const name = warehouse.name;

    const inventoryDetails = {
      itemName: this.state.itemName,
      description: this.state.description,
      category: this.state.category,
      quantity: this.state.quantity,
      warehouseID: this.state.warehouseID,
      warehouseName: name,
      status: status
    };

    axios
      .patch(
        `http://localhost:8080/inventory/${this.props.match.params.inventoryItemId}`,
        inventoryDetails
      )
      .then((res) => {})
      .catch((err) =>
        console.log(`Put request for editing of warehouse with: ${err}`)
      );
  }

  getInventoryItemDetails = (id) => {
    const url = `http://localhost:8080/inventory/${id}`;

    axios
      .get(url)
      .then((res) => {
        this.setState({
          itemName: res.data.itemName,
          description: res.data.description,
          category: res.data.category,
          quantity: res.data.quantity,
          warehouseID: res.data.warehouseID,
          warehouseName: res.data.warehouseName
        });
      })
      .catch((err) => {
        console.log("error in axios", err);
      });
  };

  getAllWarehouses() {
    axios
      .get("http://localhost:8080/warehouses")
      .then((result) => {
        this.setState({
          warehouseList: result.data
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.getInventoryItemDetails(this.props.match.params.inventoryItemId);
    this.getAllWarehouses();
  }

  cancelHandler = (e) => {
    e.preventDefault();
    const cancelUrl = `/inventory-item-details/${this.props.match.params.inventoryItemId}`;
    this.props.history.push(cancelUrl);
  };

  render() {
    return (
      <section className="inventory-form">
        <form className="inventory-form__form" id="inventory-form">
          <div className="inventory-form__input-container">
            {/* Item Details */}
            <fieldset
              className="inventory-form__item-details"
              form="inventory-form"
              name="inventory-form__item-details"
            >
              <h2 className="inventory-form__heading">Item Details</h2>
              {/* Item Name */}
              <label className="inventory-form__label" htmlFor="itemName">
                Item Name{" "}
              </label>
              <input
                className={
                  this.state.form.name
                    ? "inventory-form__input"
                    : "inventory-form__input inventory-form__input--invalid"
                }
                id="itemName"
                name="itemName"
                type="text"
                placeholder="Item Name"
                value={this.state.itemName}
                onChange={this.handleInputChange}
              />
              {/* Validation form */}
              <div
                className={
                  this.state.form.name
                    ? "inventory-form__warning--valid"
                    : "inventory-form__warning"
                }
              >
                <img
                  className="inventory-form__warning-icon"
                  src={errorIcon}
                  alt="error icon"
                />
                <p className="inventory-form__warning-message">
                  This field is required
                </p>
              </div>
              {/* Description */}
              <label className="inventory-form__label" htmlFor="description">
                Description
              </label>
              <textarea
                placeholder="Please enter a brief item description..."
                name="description"
                className={
                  this.state.form.description
                    ? "inventory-form__textarea"
                    : "inventory-form__textarea inventory-form__textarea--invalid"
                }
                value={this.state.description}
                onChange={this.handleInputChange}
              ></textarea>
              {/* Validation form */}
              <div
                className={
                  this.state.form.description
                    ? "inventory-form__warning--valid"
                    : "inventory-form__warning"
                }
              >
                <img
                  className="inventory-form__warning-icon"
                  src={errorIcon}
                  alt="error icon"
                />
                <p className="inventory-form__warning-message">
                  {" "}
                  This field is required
                </p>
              </div>
              {/* Category */}
              <label className="inventory-form__label" htmlFor="category">
                Category
              </label>
              <select
                className={
                  this.state.form.category
                    ? "inventory-form__select-option"
                    : "inventory-form__select-option inventory-form__select-option--invalid"
                }
                name="category"
                value={this.state.category}
                onChange={this.handleInputChange}
                id="category"
                required
              >
                <option className="inventory-form__option" value="">
                  Please select
                </option>
                {categoriesList.map((category, i) => {
                  return (
                    <option
                      className="inventory-form__option"
                      key={i}
                      value={`${category}`}
                    >{`${category}`}</option>
                  );
                })}
              </select>
              {/* Validation form */}
              <div
                className={
                  this.state.form.category
                    ? "inventory-form__warning--valid"
                    : "inventory-form__warning"
                }
              >
                <img
                  className="inventory-form__warning-icon"
                  src={errorIcon}
                  alt="error icon"
                />
                <p className="inventory-form__warning-message">
                  {" "}
                  This field is required
                </p>
              </div>
            </fieldset>
            {/* Item-availability */}
            <fieldset
              className="inventory-form__item-availability"
              form="inventory-form"
              name="inventory-form__item-availability"
            >
              <h2 className="inventory-form__heading">Item Availability</h2>
              {/* Status */}
              <label className="inventory-form__label" htmlFor="status">
                Status
              </label>
              <div className="inventory-form__status">
                <div className="inventory-form__stock">
                  <input
                    className="inventory-form__radio-button"
                    type="radio"
                    name="status"
                    value="In Stock"
                    checked={this.state.quantity !== 0}
                    onChange={this.handleInputChange}
                  />
                  <label
                    className="inventory-form__label-status"
                    htmlFor="status"
                  >
                    In Stock
                  </label>
                </div>
                <div className="inventory-form__stock">
                  <input
                    className="inventory-form__radio-button"
                    type="radio"
                    name="status"
                    value="Out Of Stock"
                    checked={this.state.quantity === 0}
                    onChange={this.handleInputChange}
                  />
                  <label
                    className="inventory-form__label-status"
                    htmlFor="status"
                  >
                    Out of Stock
                  </label>
                </div>
              </div>
              {/* Quantity */}
              <label className="inventory-form__label" htmlFor="quantity">
                Quantity
              </label>
              <input
                className={
                  this.state.form.quantity
                    ? "inventory-form__input inventory-form__input-quantity"
                    : "inventory-form__input inventory-form__input-quantity--invalid"
                }
                type="text"
                name="quantity"
                id="quantity"
                placeholder="0"
                value={this.state.quantity}
                onChange={this.handleInputChange}
              />
              {/* Validation form */}
              <div
                className={
                  this.state.form.quantity
                    ? "inventory-form__warning--valid"
                    : "inventory-form__warning"
                }
              >
                <img
                  className="inventory-form__warning-icon"
                  src={errorIcon}
                  alt="error icon"
                />
                <p className="inventory-form__warning-message">
                  {" "}
                  This field is required
                </p>
              </div>
              {/* WarehouseName and warehouseID */}
              <label className="inventory-form__label" htmlFor="warehouseID">
                Warehouse
              </label>
              <select
                className={
                  this.state.form.warehouseID
                    ? "inventory-form__select-option"
                    : "inventory-form__select-option inventory-form__select-option--invalid"
                }
                name="warehouseID"
                value={this.state.warehouseID}
                onChange={this.handleInputChange}
                required
              >
                <option className="inventory-form__option" value="">
                  Please select
                </option>
                {this.state.warehouseList.map((item, i) => {
                  return (
                    <option
                      className="inventory-form__option"
                      key={i}
                      value={item.id}
                    >
                      {item.name}
                    </option>
                  );
                })}
              </select>
              {/* Validation form */}
              <div
                className={
                  this.state.form.warehouseID
                    ? "inventory-form__warning--valid"
                    : "inventory-form__warning"
                }
              >
                <img
                  className="inventory-form__warning-icon"
                  src={errorIcon}
                  alt="error icon"
                />
                <p className="inventory-form__warning-message">
                  {" "}
                  This field is required
                </p>
              </div>
            </fieldset>
          </div>
          <div className="inventory-form__button-container">
            <Button
              type="secondary"
              value="Cancel"
              onClick={this.cancelHandler}
            />
            <Button
              type="primary"
              value={this.props.submitValue}
              onClick={this.handleSubmit}
            />
          </div>
        </form>
      </section>
    );
  }
}

export default InventoryForm;
