import './WarehouseForm.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import backIcon from '../../assets/arrow_back.svg';
import errorIcon from '../../assets/error.svg';

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

    addHandler = (e) => {
        e.preventDefault();
    }

    editHandler = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <section className='warehouse-form'>
                <div className='warehouse-form__title-container'>
                    {/* TextTitle ????*/}
                    <h1 className='warehouse-form__title-main'></h1>
                    {/* path ???? */}
                    <Link to={ } className='warehouse-form__link-back'>
                        <img className='warehouse-form__back-icon' scr={backIcon} alt='back-icon' />
                    </Link>
                </div>
                <form className='warehouse-form__form' id='warehouse-form' onSubmit={ }>
                    <div className='warehouse-form__input-container'>
                        {/* Warehouse Details */}
                        <fieldset className='warehouse-form__warehouse-details' form='warehouse-form' name='warehouse-form__warehouse-details'>
                            <legend className='warehouse-form__heading'>Warehouse Details</legend>
                            {/* Warehouse Name */}
                            <label className='warehouse-form__name' htmlFor='name'>Warehouse Name</label>
                            <input className='warehouse-form__input' id='name' name='name' type='text' placeholder='Warehouse Name' />
                            {/* Validation form */}
                            <div className={this.state.form.name ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>
                            {/* Street Address */}
                            <label className='warehouse-form__name' htmlFor='address'>Street Address</label>
                            <input className='warehouse-form__input' id='address' name='address' type='text' placeholder='Street Address' />
                            {/* Validation form */}
                            <div className={this.state.form.address ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>
                            {/* City */}
                            <label className='warehouse-form__name' htmlFor='city'>City</label>
                            <input className='warehouse-form__input' id='city' name='city' type='text' placeholder='City' />
                            {/* Validation form */}
                            <div className={this.state.form.city ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>
                            {/* Country */}
                            <label className='warehouse-form__name' htmlFor='country'>Country</label>
                            <input className='warehouse-form__input' id='country' name='country' type='text' placeholder='Country' />
                            {/* Validation form */}
                            <div className={this.state.form.country ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>
                        </fieldset>
                        {/* Contact Details */}
                        <fieldset className='warehouse-form__contact-details' form='warehouse-form' name='warehouse-form__contact-details'>
                            <legend className='warehouse-form__heading'>Contact Details</legend>
                            {/* Contact Name */}
                            <label className='warehouse-form__name' htmlFor='contactName'>Contact Name</label>
                            <input className='warehouse-form__input' id='contactName' name='contactName' type='text' placeholder='Contact Name' />
                            {/* Validation form */}
                            <div className={this.state.form.contactName ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>
                            {/* Position of contact name */}
                            <label className='warehouse-form__name' htmlFor='position'>Position</label>
                            <input className='warehouse-form__input' id='position' name='position' type='text' placeholder='Position' />
                            <div className={this.state.form.position ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>
                            {/* Phone Number of contact name */}
                            <label className='warehouse-form__name' htmlFor='phone'>Phone Number</label>
                            <input className='warehouse-form__input' id='phone' name='phone' type='text' placeholder='Phone Number' />
                            <div className={this.state.form.phone ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>
                            {/* Email of contact name*/}
                            <label className='warehouse-form__name' htmlFor='email'>Email</label>
                            <input className='warehouse-form__input' id='email' name='email' type='text' placeholder='Email' />
                            <div className={this.state.form.email ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>
                        </fieldset>
                    </div>
                    <div className='warehouse-form__button-container'>

                    </div>
                </form>
            </section>
        );
    }
}

export default WarehouseForm;

