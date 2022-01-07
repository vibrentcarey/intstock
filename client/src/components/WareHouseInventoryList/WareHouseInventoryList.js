import React from 'react';
import './WareHouseInventoryList.scss'
import chevronIcon from '../../assets/chevron_right-24px.svg';
import deleteIcon from '../../assets/delete_outline-24px.svg';
import editIcon from '../../assets/edit-24px.svg';

const WareHouseInventoryList = () => {
  return (
    <>
      <article className='inventory'>
        <div className='inventory__container'>

          <div className='inventory__item-category'>
            <div className='inventory__wrapper'>
              <div className='inventory__name-wrapper'>
                <p className='inventory__name inventory__item'>Television</p>
                <img className='inventory__arrow'src={chevronIcon} alt='arrow icon'/>
              </div>  
            </div>
            <p className='inventory__category inventory__item'>Electronics</p>
          </div>

          <div className='inventory__status-quantiy'>
            <p className='inventory__status inventory__item'>Status</p>
            <p className='inventory__quantity inventory__item'>500</p>
          </div>

          </div>
          <div className='inventory__icons'>
            <img className='inventory__icon' src={deleteIcon} alt='delete icon'/>
            <img className='inventory__icon' src={editIcon} alt='edit icon'/>
          </div>
      </article>
    </>
  )
}

export default WareHouseInventoryList
