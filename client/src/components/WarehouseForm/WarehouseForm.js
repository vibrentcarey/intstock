import "./WarehouseForm.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
// import axios from 'axios';
import back from "../../assets/arrow_back-24px.svg";
import errorIcon from "../../assets/error-24px.svg";
import Button from "../../Button/Button";
import axios from "axios";

class WarehouseForm extends Component {
  state = {
    name: true,
    address: true,
    city: true,
    country: true,
    contactName: true,
    position: true,
    phone: true,
    email: true,
  };

  nameRef = React.createRef();
  addressRef = React.createRef();
  cityRef = React.createRef();
  countryRef = React.createRef();
  contactNameRef = React.createRef();
  positionRef = React.createRef();
  phoneRef = React.createRef();
  emailRef = React.createRef();

  // componentDidMount() {
  //     const currentWarehousesId = this.props.match.params.warehousesId;

  // }

  handleChange = (e) => {
    this.setState({
      selectedWarehouse: {
        ...this.state.selectedWarehouse,
        [e.target.name]: e.target.value,
      },
    });
    if (e.target.value === "") {
      this.setState({
        ...this.state.form,
        [e.target.name]: false,
      });
    } else {
      this.setState({
        ...this.state.form,
        [e.target.name]: true,
      });
    }
  };

  handleAdd = (e) => {
    e.preventDefault();
  };

  handleEdit = (e) => {
    e.preventDefault();
  };

  addHandler = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    //TODO: Check for better way to do this
    if (!this.nameRef.current.value) {
      this.setState({ ...this.state.form, name: false }, () => {
        console.log(this.state);
      });
    }

    const warehouseDetails = {
      name: this.nameRef.current.value,
      address: this.addressRef.current.value,
      city: this.cityRef.current.value,
      country: this.countryRef.current.value,
      contact: this.contactNameRef.current.value,
      position: this.positionRef.current.value,
      phone: this.phoneRef.current.value,
      email: this.emailRef.current.value,
    };
    axios
      .post("http://localhost:8080/warehouses", warehouseDetails)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  editHandler = (e) => {
    e.preventDefault();
    console.log("edit");
  };
  //Temporary value to be replaced with query param
  // id = true

  render() {
    // let submitHandler = this.handleEdit;

    return (
      <section className="warehouse-form">
        {/* Title Page will be here */}
        <form
          className="warehouse-form__form"
          id="warehouse-form"
          onSubmit={!this.id ? this.addHandler : this.editHandler}
        >
          <div className="warehouse-form__input-container">
            {/* Warehouse Details */}
            <fieldset
              className="warehouse-form__warehouse-details"
              form="warehouse-form"
              name="warehouse-form__warehouse-details"
            >
              <h2 className="warehouse-form__heading">Warehouse Details</h2>
              {/* Warehouse Name */}
              <label className="warehouse-form__label" htmlFor="name">
                Warehouse Name
              </label>
              <input
                ref={this.nameRef}
                className={
                  this.state.name
                    ? "warehouse-form__input"
                    : "warehouse-form__input warehouse-form__input--invalid"
                }
                id="name"
                name="name"
                type="text"
                placeholder="Warehouse Name"
              />
              {/* Validation form */}
              <div
                className={
                  this.state.name
                    ? "warehouse-form__warning--valid"
                    : "warehouse-form__warning"
                }
              >
                <img
                  className="warehouse-form__warning-icon"
                  src={errorIcon}
                  alt="error icon"
                />
                <p className="warehouse-form__warning-message">
                  This field is required
                </p>
              </div>

              {/* Street Address */}
              <label className="warehouse-form__label" htmlFor="address">
                Street Address
              </label>
              <input
                ref={this.addressRef}
                className={
                  this.state.address
                    ? "warehouse-form__input"
                    : "warehouse-form__input warehouse-form__input--invalid"
                }
                id="address"
                name="address"
                type="text"
                placeholder="Street Address"
                onChange={this.handleChange}
              />
              {/* Validation form */}
              <div
                className={
                  this.state.address
                    ? "warehouse-form__warning--valid"
                    : "warehouse-form__warning"
                }
              >
                <img
                  className="warehouse-form__warning-icon"
                  src={errorIcon}
                  alt="error icon"
                />
                <p className="warehouse-form__warning-message">
                  This field is required
                </p>
              </div>
              {/* City */}
              <label className="warehouse-form__label" htmlFor="city">
                City
              </label>
              <input
                ref={this.cityRef}
                className={
                  this.state.city
                    ? "warehouse-form__input"
                    : "warehouse-form__input warehouse-form__input--invalid"
                }
                id="city"
                name="city"
                type="text"
                placeholder="City"
                onChange={this.handleChange}
              />
              {/* Validation form */}
              <div
                className={
                  this.state.city
                    ? "warehouse-form__warning--valid"
                    : "warehouse-form__warning"
                }
              >
                <img
                  className="warehouse-form__warning-icon"
                  src={errorIcon}
                  alt="error icon"
                />
                <p className="warehouse-form__warning-message">
                  This field is required
                </p>
              </div>

              {/* Country */}
              <label className="warehouse-form__label" htmlFor="country">
                Country
              </label>
              <input
                ref={this.countryRef}
                className={
                  this.state.country
                    ? "warehouse-form__input"
                    : "warehouse-form__input warehouse-form__input--invalid"
                }
                id="country"
                name="country"
                type="text"
                placeholder="Country"
                onChange={this.handleChange}
              />
              {/* Validation form */}
              <div
                className={
                  this.state.country
                    ? "warehouse-form__warning--valid"
                    : "warehouse-form__warning"
                }
              >
                <img
                  className="warehouse-form__warning-icon"
                  src={errorIcon}
                  alt="error icon"
                />
                <p className="warehouse-form__warning-message">
                  This field is required
                </p>
              </div>
            </fieldset>
            {/* Contact Details */}
            <fieldset
              className="warehouse-form__contact-details"
              form="warehouse-form"
              name="warehouse-form__contact-details"
            >
              <h2 className="warehouse-form__heading">Contact Details</h2>
              {/* Contact Name */}
              <label className="warehouse-form__label" htmlFor="contactName">
                Contact Name
              </label>
              <input
                ref={this.contactNameRef}
                className={
                  this.state.contactName
                    ? "warehouse-form__input"
                    : "warehouse-form__input warehouse-form__input--invalid"
                }
                id="contactName"
                name="contactName"
                type="text"
                placeholder="Contact Name"
                onChange={this.handleChange}
              />
              {/* Validation form */}
              <div
                className={
                  this.state.contactName
                    ? "warehouse-form__warning--valid"
                    : "warehouse-form__warning"
                }
              >
                <img
                  className="warehouse-form__warning-icon"
                  src={errorIcon}
                  alt="error icon"
                />
                <p className="warehouse-form__warning-message">
                  This field is required
                </p>
              </div>
              {/* Position of contact name */}
              <label className="warehouse-form__label" htmlFor="position">
                Position
              </label>
              <input
                ref={this.positionRef}
                className={
                  this.state.position
                    ? "warehouse-form__input"
                    : "warehouse-form__input warehouse-form__input--invalid"
                }
                id="position"
                name="position"
                type="text"
                placeholder="Position"
                onChange={this.handleChange}
              />
              <div
                className={
                  this.state.position
                    ? "warehouse-form__warning--valid"
                    : "warehouse-form__warning"
                }
              >
                <img
                  className="warehouse-form__warning-icon"
                  src={errorIcon}
                  alt="error icon"
                />
                <p className="warehouse-form__warning-message">
                  This field is required
                </p>
              </div>
              {/* Phone Number of contact name */}
              <label className="warehouse-form__label" htmlFor="phone">
                Phone Number
              </label>
              <input
                ref={this.phoneRef}
                className={
                  this.state.phone
                    ? "warehouse-form__input"
                    : "warehouse-form__input warehouse-form__input--invalid"
                }
                id="phone"
                name="phone"
                type="text"
                placeholder="Phone Number"
                onChange={this.handleChange}
              />
              <div
                className={
                  this.state.phone
                    ? "warehouse-form__warning--valid"
                    : "warehouse-form__warning"
                }
              >
                <img
                  className="warehouse-form__warning-icon"
                  src={errorIcon}
                  alt="error icon"
                />
                <p className="warehouse-form__warning-message">
                  This field is required
                </p>
              </div>
              {/* Email of contact name*/}
              <label className="warehouse-form__label" htmlFor="email">
                Email
              </label>
              <input
                ref={this.emailRef}
                className={
                  this.state.email
                    ? "warehouse-form__input"
                    : "warehouse-form__input warehouse-form__input--invalid"
                }
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                onChange={this.handleChange}
              />
              <div
                className={
                  this.state.email
                    ? "warehouse-form__warning--valid"
                    : "warehouse-form__warning"
                }
              >
                <img
                  className="warehouse-form__warning-icon"
                  src={errorIcon}
                  alt="error icon"
                />
                <p className="warehouse-form__warning-message">
                  This field is required
                </p>
              </div>
            </fieldset>
          </div>
          <div className="warehouse-form__button-container">
            <Button value="Cancel" type="secondary" />
            <Button value={this.props.submitValue} />
          </div>
        </form>
      </section>
    );
  }
}

export default WarehouseForm;
