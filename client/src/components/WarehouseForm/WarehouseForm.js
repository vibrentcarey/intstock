import "./WarehouseForm.scss";

import { Link } from "react-router-dom";
// import axios from 'axios';
import back from "../../assets/arrow_back-24px.svg";
import errorIcon from "../../assets/error-24px.svg";
import Button from "../../Button/Button";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';

const WarehouseForm = (props) => {
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            name: '',
            address: '',
            city: '',
            country: '',
            contactName: '',
            position: '',
            phone: '',
            email: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required(),
            address: Yup.string().required(),
            city: Yup.string().required(),
            country: Yup.string().required(),
            contactName: Yup.string().required(),
            position: Yup.string().required(),
            phone: Yup.string().required(),
            email: Yup.string().required().email('Invalid Email')

        }),
        onSubmit: (values) => {
            const warehouseDetails = {
                id: uuidv4(),
                name: values.name,
                address: values.address,
                city: values.city,
                country: values.country,
                contact: {
                    name: values.contactName,
                    position: values.position,
                    phone: values.phone,
                    email: values.email
                }
            }

            axios.post('http://localhost:8080/warehouses', warehouseDetails)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
    })
    console.log(formik.values.contact);

    const cancelHandler = () => {
        history.goBack()
    }
    return (
        <section className='warehouse-form'>
            <form className='warehouse-form__form' id='warehouse-form' onSubmit={formik.handleSubmit}>
                <div className='warehouse-form__input-container'>
                    {/* Warehouse Details */}
                    <fieldset className='warehouse-form__warehouse-details' form='warehouse-form' name='warehouse-form__warehouse-details'>
                        <h2 className='warehouse-form__heading'>Warehouse Details</h2>
                        {/* Warehouse Name */}
                        <label className='warehouse-form__label' htmlFor='name'>Warehouse Name</label>
                        <input
                            className={formik.touched.name && formik.errors.name ? 'warehouse-form__input warehouse-form__input--invalid' : 'warehouse-form__input'}
                            id='name'
                            name='name'
                            type='text'
                            placeholder='Warehouse Name'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                        {/* Validation form */}
                        <div className={formik.touched.name && formik.errors.name ? 'warehouse-form__warning' : 'warehouse-form__warning--valid'}>
                            <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                            <p className='warehouse-form__warning-message'>This field is required</p>
                        </div>

                        {/* Street Address */}
                        <label className='warehouse-form__label' htmlFor='address'>Street Address</label>
                        <input
                            className={formik.touched.address && formik.errors.address ? 'warehouse-form__input warehouse-form__input--invalid' : 'warehouse-form__input'}
                            id='address'
                            name='address'
                            type='text'
                            placeholder='Street Address'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.address}

                        />
                        {/* Validation form */}
                        <div className={formik.touched.address && formik.errors.address ? 'warehouse-form__warning' : 'warehouse-form__warning--valid'}>
                            <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                            <p className='warehouse-form__warning-message'>This field is required</p>
                        </div>

                        {/* City */}
                        <label className='warehouse-form__label' htmlFor='city'>City</label>
                        <input
                            className={formik.touched.city && formik.errors.city ? 'warehouse-form__input warehouse-form__input--invalid' : 'warehouse-form__input'}
                            id='city'
                            name='city'
                            type='text'
                            placeholder='City'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.city}
                        />
                        {/* Validation form */}
                        <div className={formik.touched.city && formik.errors.city ? 'warehouse-form__warning' : 'warehouse-form__warning--valid'}>
                            <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                            <p className='warehouse-form__warning-message'>This field is required</p>
                        </div>

                        {/* Country */}
                        <label className='warehouse-form__label' htmlFor='country'>Country</label>
                        <input
                            className={formik.touched.country && formik.errors.country ? 'warehouse-form__input warehouse-form__input--invalid' : 'warehouse-form__input'}
                            id='country'
                            name='country'
                            type='text'
                            placeholder='Country'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.country}
                        />
                        {/* Validation form */}
                        <div className={formik.touched.country && formik.errors.country ? 'warehouse-form__warning' : 'warehouse-form__warning--valid'}>
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
                            className={formik.touched.contactName && formik.errors.contactName ? 'warehouse-form__input warehouse-form__input--invalid' : 'warehouse-form__input'}
                            id='contactName'
                            name='contactName'
                            type='text'
                            placeholder='Contact Name'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.contactName}
                        />
                        {/* Validation form */}
                        <div className={formik.touched.contact && formik.errors.contact ? 'warehouse-form__warning' : 'warehouse-form__warning--valid'}>
                            <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                            <p className='warehouse-form__warning-message'>This field is required</p>
                        </div>

                        {/* Position of contact name */}
                        <label className='warehouse-form__label' htmlFor='position'>Position</label>
                        <input
                            className={formik.touched.position && formik.errors.position ? 'warehouse-form__input warehouse-form__input--invalid' : 'warehouse-form__input'}
                            id='position'
                            name='position'
                            type='text'
                            placeholder='Position'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.position}
                        />
                        <div className={formik.touched.position && formik.errors.position ? 'warehouse-form__warning' : 'warehouse-form__warning--valid'}>
                            <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                            <p className='warehouse-form__warning-message'>This field is required</p>
                        </div>

                        {/* Phone Number of contact name */}
                        <label className='warehouse-form__label' htmlFor='phone'>Phone Number</label>
                        <input
                            className={formik.touched.phone && formik.errors.phone ? 'warehouse-form__input warehouse-form__input--invalid' : 'warehouse-form__input'}
                            id='phone'
                            name='phone'
                            type='text'
                            placeholder='Phone Number'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                        />
                        <div className={formik.touched.phone && formik.errors.phone ? 'warehouse-form__warning' : 'warehouse-form__warning--valid'}>
                            <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                            <p className='warehouse-form__warning-message'>This field is required</p>
                        </div>

                        {/* Email of contact name*/}
                        <label className='warehouse-form__label' htmlFor='email'>Email</label>
                        <input
                            className={formik.touched.email && formik.errors.email ? 'warehouse-form__input warehouse-form__input--invalid' : 'warehouse-form__input'}
                            id='email'
                            name='email'
                            type='text'
                            placeholder='Email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        <div className={formik.touched.email && formik.errors.email ? 'warehouse-form__warning' : 'warehouse-form__warning--valid'}>
                            <img className='warehouse-form__warning-icon' src={errorIcon} alt='error icon' />
                            <p className='warehouse-form__warning-message'>{formik.errors.email ? formik.errors.email : 'This field is required'}</p>
                        </div>
                    </fieldset>
                </div>
                <div className='warehouse-form__button-container'>
                    <Button type='secondary' value='Cancel' onClick={cancelHandler} />
                    <Button type='primary' value={props.submitValue} />
                </div>
            </form>
        </section>
    );
}

export default WarehouseForm;