import "./WarehouseForm.scss";
import React, { Component } from "react";

import { Link } from "react-router-dom";
// import axios from 'axios';
import back from "../../assets/arrow_back-24px.svg";
import errorIcon from "../../assets/error-24px.svg";
import Button from "../../Button/Button";
import axios from "axios";

// Temporary value to be replaced with query param
const warehouseId = null;
// const warehouseId = '';

class WarehouseForm extends Component {
    state = {
        validation: {
            name: true,
            address: true,
            city: true,
            country: true,
            contactName: true,
            position: true,
            phone: true,
            email: true,
        },
        form: {
            name: '',
            address: '',
            city: '',
            country: '',
            contactName: '',
            position: '',
            phone: '',
            email: '',
        }
    }

    addHandler = (e) => {
        e.preventDefault()
        // Will Update Each Validation State Based On Empty Value
        // Only works if first field is empty, not sure how to get it to work otherwise 
        // Object.entries(this.state.form).forEach(entry => {
        //     const [key, value] = entry;
        //     if (!value) {
        //         this.setState({ validation: { [key]: false } })
        //     }
        // })

        if (!this.state.form.name) {
            this.setState({
                validation: {
                    // ...this.state.validation,
                    name: false
                }
            })
        }
        // description
        if (!this.state.form.address) {
            this.setState({
                validation: {
                    // ...this.state.validation,
                    address: false
                }
            })
        }

        // if(!this.state.form.city) {
        //     this.setState({validation: {
        //         ...this.state.validation,
        //         city: false
        //     }})
        // }
        // Format Object To Send To Database
        const warehouseDetails = {
            name: this.state.form.name,
            address: this.state.form.address,
            city: this.state.form.city,
            country: this.state.form.country,
            contact: this.state.form.contact,
            position: this.state.form.position,
            phone: this.state.form.phone,
            email: this.state.form.email
        }
        // Send Request To Database
        axios.post('http://localhost:8080/warehouses', warehouseDetails)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    handleChange = (e) => {
        // Set The State Based On The Target, Reset Validation State If User Starts Typing 
        this.setState({ form: { [e.target.name]: e.target.value }, validation: { ...this.state.validation, [e.target.name]: true } })
    }

    render() {
        return (
            <section className='warehouse-form'>
                <form className='warehouse-form__form' id='warehouse-form' onSubmit={!warehouseId ? this.addHandler : this.editHandler}>
                    <div className='warehouse-form__input-container'>
                        {/* Warehouse Details */}
                        <fieldset className='warehouse-form__warehouse-details' form='warehouse-form' name='warehouse-form__warehouse-details'>
                            <h2 className='warehouse-form__heading'>Warehouse Details</h2>
                            {/* Warehouse Name */}
                            <label className='warehouse-form__label' htmlFor='name'>Warehouse Name</label>
                            <input
                                className={this.state.validation.name ? 'warehouse-form__input' : 'warehouse-form__input warehouse-form__input--invalid'}
                                id='name'
                                name='name'
                                type='text'
                                placeholder='Warehouse Name'
                                onChange={this.handleChange}
                            />
                            {/* Validation form */}
                            <div className={this.state.validation.name ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>

                            {/* Street Address */}
                            <label className='warehouse-form__label' htmlFor='address'>Street Address</label>
                            <input
                                className={this.state.validation.address ? 'warehouse-form__input' : 'warehouse-form__input warehouse-form__input--invalid'}
                                id='address'
                                name='address'
                                type='text'
                                placeholder='Street Address'
                                onChange={this.handleChange}
                            />
                            {/* Validation form */}
                            <div className={this.state.validation.address ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>
                            {/* City */}
                            <label className='warehouse-form__label' htmlFor='city'>City</label>
                            <input
                                className={this.state.validation.city ? 'warehouse-form__input' : 'warehouse-form__input warehouse-form__input--invalid'}
                                id='city'
                                name='city'
                                type='text'
                                placeholder='City'
                                onChange={this.handleChange} />
                            {/* Validation form */}
                            <div className={this.state.validation.city ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>

                            {/* Country */}
                            <label className='warehouse-form__label' htmlFor='country'>Country</label>
                            <input
                                className={this.state.validation.country ? 'warehouse-form__input' : 'warehouse-form__input warehouse-form__input--invalid'}
                                id='country'
                                name='country'
                                type='text'
                                placeholder='Country'
                                onChange={this.handleChange}
                            />
                            {/* Validation form */}
                            <div className={this.state.validation.country ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>
                        </fieldset>
                        {/* Contact Details */}
                        <fieldset className='warehouse-form__contact-details' form='warehouse-form' name='warehouse-form__contact-details'>
                            <h2 className='warehouse-form__heading'>Contact Details</h2>
                            {/* Contact Name */}
                            <label className='warehouse-form__label' htmlFor='contactName'>Contact Name</label>
                            <input
                                className={this.state.validation.contactName ? 'warehouse-form__input' : 'warehouse-form__input warehouse-form__input--invalid'}
                                id='contactName'
                                name='contactName'
                                type='text'
                                placeholder='Contact Name'
                                onChange={this.handleChange}
                            />
                            {/* Validation form */}
                            <div className={this.state.validation.contactName ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>
                            {/* Position of contact name */}
                            <label className='warehouse-form__label' htmlFor='position'>Position</label>
                            <input
                                className={this.state.validation.position ? 'warehouse-form__input' : 'warehouse-form__input warehouse-form__input--invalid'}
                                id='position'
                                name='position'
                                type='text'
                                placeholder='Position'
                                onChange={this.handleChange}
                            />
                            <div className={this.state.validation.position ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>
                            {/* Phone Number of contact name */}
                            <label className='warehouse-form__label' htmlFor='phone'>Phone Number</label>
                            <input
                                className={this.state.validation.phone ? 'warehouse-form__input' : 'warehouse-form__input warehouse-form__input--invalid'}
                                id='phone'
                                name='phone'
                                type='text'
                                placeholder='Phone Number'
                                onChange={this.handleChange}
                            />
                            <div className={this.state.validation.phone ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>
                            {/* Email of contact name*/}
                            <label className='warehouse-form__label' htmlFor='email'>Email</label>
                            <input
                                className={this.state.validation.email ? 'warehouse-form__input' : 'warehouse-form__input warehouse-form__input--invalid'}
                                id='email'
                                name='email'
                                type='text'
                                placeholder='Email'
                                onChange={this.handleChange}
                            />
                            <div className={this.state.validation.email ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>
                        </fieldset>
                    </div>
                    <div className='warehouse-form__button-container'>
                        <Button type='secondary' value='Cancel' onClick={this.cancelHandler} />
                        <Button type='primary' value={this.props.submitValue} />
                    </div>
                </form>
            </section>
        );
    }
}

export default WarehouseForm;
