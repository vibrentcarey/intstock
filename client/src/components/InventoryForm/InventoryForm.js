import "./InventoryForm.scss";
import React, { Component } from "react";
import axios from "axios";
import errorIcon from "../../assets/error-24px.svg";
import Button from "../../Button/Button";

let categoriesList = ['Accessories', 'Apparel', 'Electronics', 'Gear', 'Health'];
let warehouseNames = ['Manhattan', 'King West', 'Granville', 'San Fran', 'Santa Monica', 'Seattle', 'Montreal', 'Boston'];

class InventoryForm extends Component {
    state = {
        form:{
            itemName: '',
            description:'',
            category: '',
            quantity: '',
            status: '',
            warehouseName: '', 
        },
        validation : {
            itemName: true,
            description: true,
            category: true,
            quantity: true,
            status: true,
            warehouseName: true
        }
    }

    cancelHandler = (e) => {   
        this.props.props.history.push("/")
    }

    handleChange = (e) => {
        this.setState({  
            form:{
                [e.target.name]: e.target.value
            }
        });  
       
        console.log(e.target.value)
    }
    isFormDataValid = (e) => {
        const { itemName, description, category,quantity, warehouseName, status} = this.state; 
        if(!itemName || !category || !description ||!quantity || !warehouseName || !status) {
        return false 
        }
    }
  
    // submit form
    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.form.itemName)

        // validating form after submission
        // itemName
        if(!this.state.form.itemName) {
            this.setState({validation: {
                itemName: false
            }})
        }
        // description
        if(!this.state.form.description) {
            this.setState({validation: {
                description: false
            }})
        }

        // category
        if(!this.state.form.category) {
            this.setState({validation: {
                category: false
            }})
        }

        // status
        if(!this.state.form.status) {
            this.setState({validation: {
                status: false
            }})
        }

        // quantity
        if(!this.state.form.quantity) {
            this.setState({validation: {
                quantity: false
            }})
        }
        // warehouseName
        if(!this.state.form.warehouseName) {
            this.setState({validation: {
                warehouseName: false
            }})
        }

        if(this.isFormDataValid) {
            const warehouseId = this.props.props.match.params.warehouseId
            // 2922c286-16cd-4d43-ab98-c79f698aeab0
            axios.post(`http://localhost:8080/inventories/${warehouseId}`,
            {
                itemName: e.target.itemName.value,
                description: e.target.description.value,
                category: e.target.category.value,
                status: e.target.status.value,
                quantity: e.target.quantity.value,
                warehouseName: e.target.warehouseName.value
            }
            )
            .then(res => {
                alert('Data submitted')      
            }) 
            .catch(err => {
                console.log(err)
                return err
            })
            e.target.reset();
        }         
    }

    render() {
        console.log(this.props)
        console.log(this.props.props.match.params.warehouseId)
        return (
            <section className='inventory-form'>
                <form  onSubmit={this.submitHandler}className='inventory-form__form' id='inventory-form'>
                    <div className='inventory-form__input-container'>
                        {/* Item Details */}
                        <fieldset className='inventory-form__item-details' form='inventory-form' name='inventory-form__item-details'>
                            <h2 className='inventory-form__heading'>Item Details</h2>
                            {/* Item Name */}
                            <label className='inventory-form__label' htmlFor='itemName'>Item Name </label>
                            <input className={this.state.validation.itemName ? 'inventory-form__input' : 'inventory-form__input inventory-form__input--invalid'}
                                id='itemName'
                                name='itemName'
                                type='text'
                                placeholder='Item Name'
                                onChange ={this.handleChange}
                                 />
                            {/* Validation form */}
                            <div className={this.state.validation.itemName ? 'inventory-form__warning--valid' : 'inventory-form__warning'}>
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
                                onChange ={this.handleChange}
                                className={this.state.validation.description ? 'inventory-form__textarea' : 'inventory-form__textarea inventory-form__textarea--invalid'}>
                            </textarea>

                            {/* Validation form */}
                            <div className={this.state.validation.description  ? 'inventory-form__warning--valid' : 'inventory-form__warning'}>
                                <img className='inventory-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='inventory-form__warning-message'> This field is required</p>
                            </div>

                            {/* Category */}
                            <label className='inventory-form__label' htmlFor='category'>Category</label>
                            <select className={this.state.validation.category ? 'inventory-form__select-option' : 'inventory-form__select-option inventory-form__select-option--invalid'} name='category' id='category'
                            onChange ={this.handleChange} required>
                                <option className='inventory-form__option' value="">Please select</option>
                                {categoriesList.map((category, i) => {
                                    return (
                                        <option className='inventory-form__option' key={i} value={`${category}`}>{`${category}`}</option>)
                                })}
                            </select>

                            {/* Validation form */}
                            <div className={this.state.validation.category ? 'inventory-form__warning--valid' : 'inventory-form__warning'}>
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
                                    <input className='inventory-form__radio-button' 
                                    type='radio' name='status' id='instock'
                                    onChange ={this.handleChange} value='In Stock' />
                                    <label className='inventory-form__label-status' htmlFor='status'>In Stock</label>
                                </div>

                                <div className='inventory-form__stock'>
                                    <input className='inventory-form__radio-button' type='radio' name='status' onChange ={this.handleChange}  id='outOfStock' value='Out Of Stock' />
                                    <label className='inventory-form__label-status' htmlFor='status'>Out of Stock</label>
                                </div>
                            </div>

                            {/* Quantity */}
                            {this.state.form.status === 'Out Of Stock' || <><label className='inventory-form__label' htmlFor='quantity'>Quantity</label>
                            <input className={this.state.validation.quantity? 'inventory-form__input inventory-form__input-quantity' : 'inventory-form__input inventory-form__input-quantity--invalid'} type='text' name='quantity' 
                            onChange ={this.handleChange}id='quantity' placeholder='0' /></>}
                            {/* Validation form */}

                            <div className={this.state.validation.quantity? 'inventory-form__warning--valid' : 'inventory-form__warning'}>
                                <img className="inventory-form__warning-icon" src={errorIcon} alt="error icon" />
                                <p className='inventory-form__warning-message'> This field is required</p>
                            </div>

                            {/* WarehouseName */}
                            <label className='inventory-form__label' htmlFor='warehouseName'>Warehouse</label>
                            <select className={this.state.validation.warehouseName ? 'inventory-form__select-option' : 'inventory-form__select-option inventory-form__select-option--invalid'} name="warehouseName"
                            onChange ={this.handleChange} required>
                                <option className='inventory-form__option' value="">Please select</option>
                                {warehouseNames.map((warehouseName, i) => {
                                    return (
                                        <option className='inventory-form__option' key={i} value={`${warehouseName}`}>{`${warehouseName}`}</option>)
                                })}
                            </select>
                            {/* Validation form */}
                            <div className={this.state.validation.warehouseName ? 'inventory-form__warning--valid' : 'inventory-form__warning'}>
                                <img className="inventory-form__warning-icon" src={errorIcon} alt="error icon" />
                                <p className='inventory-form__warning-message'> This field is required</p>
                            </div>
                        </fieldset>
                    </div>
                    <div className='inventory-form__button-container'>
                        <Button type='secondary' value='Cancel' onClick={this.CancelHandler} />
                        <Button  type='primary' value={this.props.submitValue} />
                    </div>
                </form>
            </section>
        );
    }
}

export default InventoryForm;