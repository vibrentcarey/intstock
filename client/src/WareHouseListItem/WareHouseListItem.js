import React from 'react';
import './WareHouseListItem.scss';
import chevronIcon from '../assets/chevron_right-24px.svg';
import deleteIcon from '../assets/delete_outline-24px.svg';
import editIcon from '../assets/edit-24px.svg';

const WareHouseListItem = (props) => {
  // ListItem props to be used!!
  // const {wareHouseName, address, contactName, contactInfo} = props
  return (
    <>
    {/* ⇧⌘L */}
      <article className='warehouse-list-item'>
      <div className='warehouse-list-item__wrapper'>
        <div className='warehouse-list-item__right'>
          <div className='warehouse-list-item__container'>
            <p className='warehouse-list-item__name'>Manhattan</p>
            <img className='warehouse-list-item__icon'src={chevronIcon} alt='chevron icon'/>
          </div>
          <p className='warehouse-list-item__address'>
            503 Broadway
            New York, USA
          </p>
          
        </div>

        <div className='warehouse-list-item__left'>
          <p className='warehouse-list-item__contact-name'>Permin Aujla</p>
          <p className='warehouse-list-item__contact-info'>
          +1(629)555-0129
          paujla@instock.com
          </p>
          <div className='warehouse-list-item__icons warehouse-list-item__icons--tablet'>
            <img className='warehouse-list-item__delete' src={deleteIcon} alt='delete icon'/>
            <img className='warehouse-list-item__edit'src={editIcon} alt='edit icon'/>
        </div>    
      </div> 
      </div>     
      <div className='warehouse-list-item__icons warehouse-list-item__icons--mobile'>
        <img className='warehouse-list-item__delete' src={deleteIcon} alt='delete icon '/>
        <img className='warehouse-list-item__edit'src={editIcon} alt='edit icon'/>
      </div>
      </article>
      <hr/>
    </>
  )
}

export default WareHouseListItem
