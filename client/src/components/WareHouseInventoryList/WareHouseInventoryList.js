import React from 'react';
import chevronIcon from '../../assets/chevron_right-24px.svg';
import deleteIcon from '../../assets/delete_outline-24px.svg';
import editIcon from '../../assets/edit-24px.svg';

const WareHouseInventoryList = () => {
  return (
    <>
      <article className='inventory'>
        <div className='inventory__container'>
          <div className='inventory__item-category'>
            <div className='inventory__name-wrapper'>
              <p>Television</p>
              <img src={chevronIcon} alt='arrow icon'/>
            </div>  
            <p>Electronics</p>
          </div>

          <div className='inventory__status-quantiy'>
            <p>Status</p>
            <p>500</p>
          </div>

          <div className='inventory__icons'>
            <img src={deleteIcon} alt='delete icon'/>
            <img src={editIcon} alt='edit icon'/>
          </div>
        </div>
      </article>
    </>
  )
}

export default WareHouseInventoryList
