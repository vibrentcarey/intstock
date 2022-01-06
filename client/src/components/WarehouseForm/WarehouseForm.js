import './WarehouseForm.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import errorIcon from '../../assets/error-24px.svg';

class WarehouseForm extends Component {
    state = {
        selectedWarehouse: null,
        form: {
            name: false,
            address: false,
            city: false,
            country: false,
            contactName: false,
            position: false,
            phone: false,
            email: false,
        }
    }

    // componentDidMount() {
    //     const currentWarehousesId = this.props.match.params.warehousesId;

    // }

    handleChange = (e) => {
        this.setState({
            selectedWarehouse: {
                ...this.state.selectedWarehouse, [e.target.name]: e.target.value,
            }
        })
        if (e.target.value === "") {
            this.setState({
                ...this.state.form, [e.target.name]: false,
            })
        } else {
            this.setState({
                ...this.state.form, [e.target.name]: true,
            })
        }
    }

    handleAdd = (e) => {
        e.preventDefault();
    }

    handleEdit = (e) => {
        e.preventDefault();
    }

    render() {
        let submitHandler = this.handleEdit;

        return (
            <section className='warehouse-form'>
                <form className='warehouse-form__form' id='warehouse-form' onSubmit={submitHandler}>
                    <div className='warehouse-form__input-container'>
                        {/* Warehouse Details */}
                        <fieldset className='warehouse-form__warehouse-details' form='warehouse-form' name='warehouse-form__warehouse-details'>
                            <h2 className='warehouse-form__heading'>Warehouse Details</h2>
                            {/* Warehouse Name */}
                            <label className='warehouse-form__label' htmlFor='name'>Warehouse Name</label>
                            <input
                                className={this.state.form.name ? 'warehouse-form__input' : 'warehouse-form__input warehouse-form__input--invalid'}
                                id='name'
                                name='name'
                                type='text'
                                placeholder='Warehouse Name'
                                onChange={this.handleChange} />
                            {/* Validation form */}
                            <div className={this.state.form.name ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>
                            {/* Street Address */}
                            <label className='warehouse-form__label' htmlFor='address'>Street Address</label>
                            <input
                                className={this.state.form.address ? 'warehouse-form__input' : 'warehouse-form__input warehouse-form__input--invalid'}
                                id='address'
                                name='address'
                                type='text'
                                placeholder='Street Address'
                                onChange={this.handleChange} />
                            {/* Validation form */}
                            <div className={this.state.form.address ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>
                            {/* City */}
                            <label className='warehouse-form__label' htmlFor='city'>City</label>
                            <input
                                className={this.state.form.city ? 'warehouse-form__input' : 'warehouse-form__input warehouse-form__input--invalid'}
                                id='city'
                                name='city'
                                type='text'
                                placeholder='City'
                                onChange={this.handleChange} />
                            {/* Validation form */}
                            <div className={this.state.form.city ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>
                            {/* Country */}
                            <label className='warehouse-form__label' htmlFor='country'>Country</label>
                            <input
                                className={this.state.form.country ? 'warehouse-form__input' : 'warehouse-form__input warehouse-form__input--invalid'}
                                id='country'
                                name='country'
                                type='text'
                                placeholder='Country'
                                onChange={this.handleChange} />
                            {/* Validation form */}
                            <div className={this.state.form.country ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
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
                                className={this.state.form.contactName ? 'warehouse-form__input' : 'warehouse-form__input warehouse-form__input--invalid'}
                                id='contactName'
                                name='contactName'
                                type='text'
                                placeholder='Contact Name'
                                onChange={this.handleChange} />
                            {/* Validation form */}
                            <div className={this.state.form.contactName ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>

                            {/* Position of contact name */}
                            <label className='warehouse-form__label' htmlFor='position'>Position</label>
                            <input
                                className={this.state.form.position ? 'warehouse-form__input' : 'warehouse-form__input warehouse-form__input--invalid'}
                                id='position'
                                name='position'
                                type='text'
                                placeholder='Position'
                                onChange={this.handleChange} />
                            {/* Validation form */}
                            <div className={this.state.form.position ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>

                            {/* Phone Number of contact name */}
                            <label className='warehouse-form__label' htmlFor='phone'>Phone Number</label>
                            <input
                                className={this.state.form.phone ? 'warehouse-form__input' : 'warehouse-form__input warehouse-form__input--invalid'}
                                id='phone'
                                name='phone'
                                type='text'
                                placeholder='Phone Number'
                                onChange={this.handleChange} />
                            {/* Validation form */}
                            <div className={this.state.form.phone ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>

                            {/* Email of contact name*/}
                            <label className='warehouse-form__label' htmlFor='email'>Email</label>
                            <input
                                className={this.state.form.email ? 'warehouse-form__input' : 'warehouse-form__input warehouse-form__input--invalid'}
                                id='email'
                                name='email'
                                type='text'
                                placeholder='Email'
                                onChange={this.handleChange} />
                            {/* Validation form */}
                            <div className={this.state.form.email ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>
                        </fieldset>
                    </div>
                    <div className='warehouse-form__button-container'>
                        <button>Submit</button>
                    </div>
                </form>
            </section>
        );
    }
}

export default WarehouseForm;

