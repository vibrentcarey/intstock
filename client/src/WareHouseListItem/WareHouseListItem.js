import React from 'react';
import './WareHouseListItem.css';
import chevronIcon from '../assets/chevron_right-24px.svg';

const WareHouseListItem = (props) => {
  const {wareHouseName, address, contactName, contactInfo} = props
  return (
    <>
      <article className='ware-house-list-item'>
        <div className='ware-house-list-item__right'>
          <div className='ware-house-list-item__container'>
            <p className='ware-house-list-item__name'>Manhattan</p>
            <img className='ware-house-list-item__icon'src={chevronIcon} alt='chevron icon'/>
          </div>
          <p className='ware-house-list-item__address'>
            503 Broadway,
            New York, USA
          </p>
        </div>

        <div className='ware-house-list-item__left'>
          <p className='ware-house-list-item__contact-name'>Permin Aujla</p>
          <p className='ware-house-list-item__contact-info'>
          +1(629)555-0129
          paujla@instock.com
          </p>
        </div>     
      </article>
      <hr/>
    </>
  )
}

export default WareHouseListItem
