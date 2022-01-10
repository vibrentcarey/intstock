import "./WarehouseForm.scss";
import React, { Component } from "react";

import { Link } from "react-router-dom";
// import axios from 'axios';
import back from "../../assets/arrow_back-24px.svg";
import errorIcon from "../../assets/error-24px.svg";
import Button from "../../Button/Button";
import axios from "axios";

// Temporary value to be replaced with query param
const warehouseId = '2922c286-16cd-4d43-ab98-c79f698aeab0'
class WarehouseForm extends Component {
    state = {
        data: null,
        form: {
            name: true,
            address: true,
            city: true,
            country: true,
            contactName: true,
            position: true,
            phone: true,
            email: true,
        }
    }

    //  component was created, insert into DOM, and rendered first time
    // componentDidMount() {
    //     const warehouseId = this.props.match.params.warehouseId;

    //     if (warehouseId) {
    //         axios
    //             .get(`http://localhost:8080/warehouses/${warehouseId}`)
    //             .then(res => {
    //                 console.log(res.data)
    //                 this.setState({
    //                     data: {
    //                         name: res.data.name,
    //                         address: res.data.address,
    //                         city: res.data.city,
    //                         country: res.data.country,
    //                         contactName: res.data.contact.name,
    //                         position: res.data.contact.position,
    //                         phone: res.data.contact.phone,
    //                         email: res.data.contact.email,
    //                     }
    //                 })
    //                 this.setState({
    //                     form: {
    //                         name: true,
    //                         address: true,
    //                         city: true,
    //                         country: true,
    //                         contactName: true,
    //                         position: true,
    //                         phone: true,
    //                         email: true,
    //                     }
    //                 })
    //             })
    //             .catch(err => console.log(`Get request for editing of warehouse with: ${err}`))
    //     }
    // }

    // handleChange = (e) => {
    //     this.setState({
    //         data: {
    //             ...this.state.data, [e.target.name]: e.target.value
    //         }
    //     })
    //     if (e.target.value === "") {
    //         this.setState({
    //             form: { ...this.state.form, [e.target.name]: false }
    //         })
    //     } else {
    //         this.setState({
    //             form: { ...this.state.form, [e.target.name]: true }
    //         })
    //     }
    // }

    // nameRef = React.createRef();
    // addressRef = React.createRef();
    // cityRef = React.createRef();
    // countryRef = React.createRef();
    // contactNameRef = React.createRef();
    // positionRef = React.createRef();
    // phoneRef = React.createRef();
    // emailRef = React.createRef();

    // addHandler = (e) => {
    //     e.preventDefault()
    //     console.log(e.target.name);
    //     //TODO: Check for better way to do this
    //     if (!this.nameRef.current.value) {
    //         this.setState({ ...this.state.form, name: false }, () => {
    //             console.log(this.state.form);
    //         })
    //     }

    //     const warehouseDetails = {
    //         name: this.nameRef.current.value,
    //         address: this.addressRef.current.value,
    //         city: this.cityRef.current.value,
    //         country: this.countryRef.current.value,
    //         contact: this.contactNameRef.current.value,
    //         position: this.positionRef.current.value,
    //         phone: this.phoneRef.current.value,
    //         email: this.emailRef.current.value
    //     }

    //     axios.post('http://localhost:8080/warehouses', warehouseDetails)
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // }
    // }

    // editHandler = (e) => {
    // will be condition to validation form
    //TODO: Check for better way to do this
    // if (!this.nameRef.current.value) {
    //     this.setState({ ...this.state.form, name: false }, () => {
    //         console.log(this.state.form);
    //     })
    // e.preventDefault()
    // console.log('edit');
    // console.log(`http://localhost:8080/warehouses/${warehouseId}`)
    // const warehouseDetails = {
    //     name: this.nameRef.current.value,
    //     address: this.addressRef.current.value,
    //     city: this.cityRef.current.value,
    //     country: this.countryRef.current.value,
    //     contact: this.contactNameRef.current.value,
    //     position: this.positionRef.current.value,
    //     phone: this.phoneRef.current.value,
    //     email: this.emailRef.current.value
    // }

    //         axios
    //             .put(`http://localhost:8080/warehouses/${warehouseId}`, 
    //             {
    //                 name:this.state.data.name,
    //                 address:this.state.data.address,
    //                 city:this.state.data.city,
    //                 country:this.state.data.country,
    //                 contact:{
    //                     name:this.state.data.contactName,
    //                     position:this.state.data.position,
    //                     phone:this.state.data.phone,
    //                     email:this.state.data.email,
    //                 }
    //             }
    //             .then(res => {
    //                 console.log(res)
    //                 alert('Warehouse updated!')
    //             })
    //             .catch(err => console.log(`Put request for editing of warehouse with: ${err}`))
    //     }
    // }

    cancelHandler = (e) => {
        e.preventDefault()
        e.target.reset()
        this.props.history.push("/")
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
                                value={this.state.data ? this.state.data.name : ""}
                                ref={this.nameRef}
                                className={this.state.form.name ? 'warehouse-form__input' : 'warehouse-form__input warehouse-form__input--invalid'}
                                id='name'
                                name='name'
                                type='text'
                                placeholder='Warehouse Name'
                                onChange={this.handleChange}
                            />
                            {/* Validation form */}
                            <div className={this.state.form.name ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>

                            {/* Street Address */}
                            <label className='warehouse-form__label' htmlFor='address'>Street Address</label>
                            <input
                                value={this.state.data ? this.state.data.address : ""}
                                ref={this.addressRef}
                                className={this.state.form.address ? 'warehouse-form__input' : 'warehouse-form__input warehouse-form__input--invalid'}
                                id='address'
                                name='address'
                                type='text'
                                placeholder='Street Address'
                                onChange={this.handleChange}
                            />
                            {/* Validation form */}
                            <div className={this.state.form.address ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>
                            {/* City */}
                            <label className='warehouse-form__label' htmlFor='city'>City</label>
                            <input
                                value={this.state.data ? this.state.data.city : ""}
                                ref={this.cityRef}
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
                                value={this.state.data ? this.state.data.country : ""}
                                ref={this.countryRef}
                                className={this.state.form.country ? 'warehouse-form__input' : 'warehouse-form__input warehouse-form__input--invalid'}
                                id='country'
                                name='country'
                                type='text'
                                placeholder='Country'
                                onChange={this.handleChange}
                            />
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
                                value={this.state.data ? this.state.data.contactName : ""}
                                ref={this.contactNameRef}
                                className={this.state.form.contactName ? 'warehouse-form__input' : 'warehouse-form__input warehouse-form__input--invalid'}
                                id='contactName'
                                name='contactName'
                                type='text'
                                placeholder='Contact Name'
                                onChange={this.handleChange}
                            />
                            {/* Validation form */}
                            <div className={this.state.form.contactName ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>
                            {/* Position of contact name */}
                            <label className='warehouse-form__label' htmlFor='position'>Position</label>
                            <input
                                value={this.state.data ? this.state.data.position : ""}
                                ref={this.positionRef}
                                className={this.state.form.position ? 'warehouse-form__input' : 'warehouse-form__input warehouse-form__input--invalid'}
                                id='position'
                                name='position'
                                type='text'
                                placeholder='Position'
                                onChange={this.handleChange}
                            />
                            <div className={this.state.form.position ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>
                            {/* Phone Number of contact name */}
                            <label className='warehouse-form__label' htmlFor='phone'>Phone Number</label>
                            <input
                                value={this.state.data ? this.state.data.phone : ""}
                                ref={this.phoneRef}
                                className={this.state.form.phone ? 'warehouse-form__input' : 'warehouse-form__input warehouse-form__input--invalid'}
                                id='phone'
                                name='phone'
                                type='text'
                                placeholder='Phone Number'
                                onChange={this.handleChange}
                            />
                            <div className={this.state.form.phone ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
                                <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                                <p className='warehouse-form__warning-message'>This field is required</p>
                            </div>
                            {/* Email of contact name*/}
                            <label className='warehouse-form__label' htmlFor='email'>Email</label>
                            <input
                                value={this.state.data ? this.state.data.email : ""}
                                ref={this.emailRef}
                                className={this.state.form.email ? 'warehouse-form__input' : 'warehouse-form__input warehouse-form__input--invalid'}
                                id='email'
                                name='email'
                                type='text'
                                placeholder='Email'
                                onChange={this.handleChange} />
                            <div className={this.state.form.email ? 'warehouse-form__warning--valid' : 'warehouse-form__warning'}>
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
