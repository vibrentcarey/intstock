import "./InventoryForm.scss";
import React, { Component } from "react";
import axios from "axios";
import errorIcon from "../../assets/error-24px.svg";
import Button from "../../Button/Button";

class InventoryForm extends Component {
    render() {
        return (
            <section className="inventory-form">
                <form className="inventory-form__form" id="inventory-form">
                    {/* Item Details */}
                    <fieldset className="inventory-form__item-details" form="inventory-form" name="inventory-form__item-details">
                        <h2 className="inventory-form__heading">Item Details</h2>
                        {/* Item Name */}
                        <label className="inventory-form__label" htmlFor="itemName">Item Name </label>
                        <input className={this.state.form.name ? "inventory-form__input" : "inventory-form__input inventory-form__input--invalid"}
                            id="itemName"
                            name="itemName"
                            type="text"
                            placeholder="Item Name" />
                        {/* Validation form */}
                        <div className={this.state.form.name ? "inventory-form--valid" : "inventory-form__warning"}>
                            <img
                                className="inventory-form__warning-icon"
                                src={errorIcon}
                                alt="error icon"
                            />
                            <p className="inventory-form__warning-message">
                                This field is required
                            </p>
                        </div>
                        <label className="inventory-form__label" htmlFor="description">Description</label>
                        <textarea
                            placeholder="Please enter a brief item description..."
                            name="description"
                            className={this.state.form.description ? "inventory-form__textarea" : "inventory-form__textarea inventory-form__textarea--invalid"}>
                        </textarea>
                        {/* Validation form */}
                        <div className={this.state.form.description ? "inventory-form--valid" : "inventory-form__warning"}>
                            <img className="inventory-form__warning-icon" src={errorIcon} alt="error icon" />
                            <p className="inventory-form__warning-message"> This field is required</p>
                        </div>



                    </fieldset>
                </form>
            </section>
        );
    }
}

export default InventoryForm;