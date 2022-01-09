import React from 'react';
import './InventoryItem.scss'
import chevronIcon from '../../assets/chevron_right-24px.svg';
import deleteIcon from '../../assets/delete_outline-24px.svg';
import editIcon from '../../assets/edit-24px.svg';

const InventoryItem = (props) => {

  const {name, category, quantity} = props;
  return (
    <>
      <article className='inventory'>
        <div className='inventory__container'>

          <div className='inventory__item-category'>
            <div className='inventory__wrapper'>
              <div className='inventory__name-wrapper'>
                <p className='inventory__name inventory__item'>{name}</p>
                <img className='inventory__arrow'src={chevronIcon} alt='arrow icon'/>
              </div>  
            </div>
            <p className='inventory__category inventory__item'>{category}</p>
          </div>

          <div className='inventory__status-quantity'>
            <p className='inventory__status inventory__item'>Status</p>
            <p className='inventory__quantity inventory__item'>{quantity}</p>
          </div>
          <div className='inventory__icons inventory__desktop' >
            <img className='inventory__icon' src={deleteIcon} alt='delete icon'/>
            <img className='inventory__icon' src={editIcon} alt='edit icon'/>
          </div>

          </div>
          <div className='inventory__icons inventory__mobile'>
            <img className='inventory__icon' src={deleteIcon} alt='delete icon'/>
            <img className='inventory__icon' src={editIcon} alt='edit icon'/>
          </div>
      </article>
    </>
  )
}

export default InventoryItem