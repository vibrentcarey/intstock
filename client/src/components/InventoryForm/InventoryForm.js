import "./InventoryForm.scss";
import React, { Component } from "react";
import axios from "axios";
import errorIcon from "../../assets/error-24px.svg";
import Button from "../../Button/Button";

let categoriesList = ['Accessories', 'Apparel', 'Electronics', 'Gear', 'Health'];
let warehouseNames = ['Manhattan', 'King West', 'Granville', 'San Fran', 'Santa Monica', 'Seattle', 'Montreal', 'Boston'];

class InventoryForm extends Component {
    state = {
        form: {
            name: true,
            description: true,
            category: true,
            quantity: true,
            warehouseName: true
        }
    }

    cancelHandler = (e) => {
        e.preventDefault()
        this.props.history.push("/")
    }

    render() {
        return (
            <section className='inventory-form'>
                <form className='inventory-form__form' id='inventory-form'>
                    <div className='inventory-form__input-container'>
                        {/* Item Details */}
                        <fieldset className='inventory-form__item-details' form='inventory-form' name='inventory-form__item-details'>
                            <h2 className='inventory-form__heading'>Item Details</h2>
                            {/* Item Name */}
                            <label className='inventory-form__label' htmlFor='itemName'>Item Name </label>
                            <input className={this.state.form.name ? 'inventory-form__input' : 'inventory-form__input inventory-form__input--invalid'}
                                id='itemName'
                                name='itemName'
                                type='text'
                                placeholder='Item Name' />
                            {/* Validation form */}
                            <div className={this.state.form.name ? 'inventory-form__warning--valid' : 'inventory-form__warning'}>
                                <img
                                    className='inventory-form__warning-icon'
                                    src={errorIcon}
                                    alt='error icon'
                                />
                                <p className='inventory-form__warning-message'>
                                    This field is required
                                </p>
                            </div>
                            {/* Description */}
                            <label className='inventory-form__label' htmlFor='description'>Description</label>
                            <textarea
                                placeholder='Please enter a brief item description...'
                                name='description'
                                className={this.state.form.description ? 'inventory-form__textarea' : 'inventory-form__textarea inventory-form__textarea--invalid'}>
                            </textarea>
                            {/* Validation form */}
                            <div className={this.state.form.description ? 'inventory-form__warning--valid' : 'inventory-form__warning'}>
                                <img className='inventory-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='inventory-form__warning-message'> This field is required</p>
                            </div>
                            {/* Category */}
                            <label className='inventory-form__label' htmlFor='category'>Category</label>
                            <select className={this.state.form.category ? 'inventory-form__select-option' : 'inventory-form__select-option inventory-form__select-option--invalid'} name='category' id='category' required>
                                <option className='inventory-form__option' value="">Please select</option>
                                {categoriesList.map((category, i) => {
                                    return (
                                        <option className='inventory-form__option' key={i} value={`${category}`}>{`${category}`}</option>)
                                })}
                            </select>
                            {/* Validation form */}
                            <div className={this.state.form.category ? 'inventory-form__warning--valid' : 'inventory-form__warning'}>
                                <img className='inventory-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='inventory-form__warning-message'> This field is required</p>
                            </div>
                        </fieldset>
                        {/* Item-availability */}
                        <fieldset className='inventory-form__item-availability' form='inventory-form' name='inventory-form__item-availability'>
                            <h2 className='inventory-form__heading'>Item Availability</h2>
                            {/* Status */}
                            <label className='inventory-form__label' htmlFor='status'>Status</label>
                            <div className='inventory-form__status'>
                                <div className='inventory-form__stock'>
                                    <input className='inventory-form__radio-button' type='radio' name='status' value='In Stock' />
                                    <label className='inventory-form__label-status' htmlFor='status'>In Stock</label>
                                </div>
                                <div className='inventory-form__stock'>
                                    <input className='inventory-form__radio-button' type='radio' name='status' value='Out Of Stock' />
                                    <label className='inventory-form__label-status' htmlFor='status'>Out of Stock</label>
                                </div>
                            </div>
                            {/* Quantity */}
                            <label className='inventory-form__label' htmlFor='quantity'>Quantity</label>
                            <input className={this.state.form.quantity ? 'inventory-form__input inventory-form__input-quantity' : 'inventory-form__input inventory-form__input-quantity--invalid'} type='text' name='quantity' id='quantity' placeholder='0' />
                            {/* Validation form */}
                            <div className={this.state.form.quantity ? 'inventory-form__warning--valid' : 'inventory-form__warning'}>
                                <img className="inventory-form__warning-icon" src={errorIcon} alt="error icon" />
                                <p className='inventory-form__warning-message'> This field is required</p>
                            </div>
                            {/* WarehouseName */}
                            <label className='inventory-form__label' htmlFor='warehouseName'>Warehouse</label>
                            <select className={this.state.form.warehouseName ? 'inventory-form__select-option' : 'inventory-form__select-option inventory-form__select-option--invalid'} name="warehouseName" required>
                                <option className='inventory-form__option' value="">Please select</option>
                                {warehouseNames.map((warehouseName, i) => {
                                    return (
                                        <option className='inventory-form__option' key={i} value={`${warehouseName}`}>{`${warehouseName}`}</option>)
                                })}
                            </select>
                            {/* Validation form */}
                            <div className={this.state.form.warehouseName ? 'inventory-form__warning--valid' : 'inventory-form__warning'}>
                                <img className="inventory-form__warning-icon" src={errorIcon} alt="error icon" />
                                <p className='inventory-form__warning-message'> This field is required</p>
                            </div>
                        </fieldset>
                    </div>
                    <div className='inventory-form__button-container'>
                        <Button type='secondary' value='Cancel' onClick={this.CancelHandler} />
                        <Button type='primary' value={this.props.submitValue} />
                    </div>
                </form>
            </section>
        );
    }
}

export default InventoryForm;