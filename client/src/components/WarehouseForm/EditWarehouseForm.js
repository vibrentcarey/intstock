import "./WarehouseForm.scss";
import React, { Component } from "react";
import errorIcon from "../../assets/error-24px.svg";
import Button from "../../Button/Button";
import axios from "axios";

// Temporary value to be replaced with query param
const warehouseId = null;

class EditWarehouseForm extends Component {
  state = {
    form: null,
    validation: {
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

  componentDidMount() {
    const warehouseId = this.props.props.match.params.warehouseId;
    if (warehouseId) {
      axios
        .get(`http://localhost:8080/warehouses/${warehouseId}`)
        .then(res => {
          this.setState({
            form: {
              name: res.data.name,
              address: res.data.address,
              city: res.data.city,
              country: res.data.country,
              contactName: res.data.contact.name,
              position: res.data.contact.position,
              phone: res.data.contact.phone,
              email: res.data.contact.email,
            }
          })
          this.setState({
            validation: {
              name: true,
              address: true,
              city: true,
              country: true,
              contactName: true,
              position: true,
              phone: true,
              email: true,
            }
          })
        })
        .catch(err => console.log(err))
    }
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form, [e.target.name]: e.target.value
      }
    })
    if (e.target.value === "") {
      this.setState({
        validation: { ...this.state.validation, [e.target.name]: false }
      })
    } else {
      this.setState({
        validation: { ...this.state.validation, [e.target.name]: true }
      })
    }
  }


  editHandler = (e) => {
    e.preventDefault()
    const { name, address, city, country, contactName, position, phone, email } = this.state.validation
    const warehouseId = this.props.props.match.params.warehouseId;
    if (name && address && city && country && contactName && position && phone && email) {
      axios
        .put(`http://localhost:8080/warehouses/${warehouseId}`,
          {
            name: this.state.form.name,
            address: this.state.form.address,
            city: this.state.form.city,
            country: this.state.form.country,
            contact: {
              name: this.state.form.contactName,
              position: this.state.form.position,
              phone: this.state.form.phone,
              email: this.state.form.email,
            }
          })
        .then(res => {
          console.log(res)
          alert('Warehouse edited!')
          this.props.props.history.push('/')
        })
        .catch(err => console.log(`Put request for editing of warehouse with: ${err}`))
    }
  }

  cancelHandler = (e) => {
    this.props.props.history.push('/')
  }

  render() {
    console.log(this.props)
    console.log(this.props.props.match.params.warehouseId)
    return (
      <section className='warehouse-form'>
        <form className='warehouse-form__form' id='warehouse-form' onSubmit={this.editHandler}>
          <div className='warehouse-form__input-container'>
            {/* Warehouse Details */}
            <fieldset className='warehouse-form__warehouse-details' form='warehouse-form' name='warehouse-form__warehouse-details'>
              <h2 className='warehouse-form__heading'>Warehouse Details</h2>
              {/* Warehouse Name */}
              <label className='warehouse-form__label' htmlFor='name'>Warehouse Name</label>
              <input
                value={this.state.form ? this.state.form.name : ""}
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
                value={this.state.form ? this.state.form.address : ""}
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
                value={this.state.form ? this.state.form.city : ""}
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
                value={this.state.form ? this.state.form.country : ""}
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
                value={this.state.form ? this.state.form.contactName : ""}
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
                value={this.state.form ? this.state.form.position : ""}
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
                value={this.state.form ? this.state.form.phone : ""}
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
                value={this.state.form ? this.state.form.email : ""}
                className={this.state.validation.email ? 'warehouse-form__input' : 'warehouse-form__input warehouse-form__input--invalid'}
                id='email'
                name='email'
                type='text'
                placeholder='Email'
                onChange={this.handleChange} />
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

export default EditWarehouseForm;