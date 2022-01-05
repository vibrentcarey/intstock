import React from 'react'

const WareHouseListItem = (props) => {
  const {wareHouseName, address, contactName, contactInfo} = props
  return (
    <article className='ware-house-list-item'>
      <p className='ware-house-list-item__name'>Manhattan</p>
      <p className='ware-house-list-item__address'>
        Perman Aujla
        New York, USA
      </p>
      <p className='ware-house-list-item__contact-name'>Permin Aujla</p>
      <p className='ware-house-list-item__contact-info'>
      +1(629)555-0126
      paujla@instock.com
      </p>


    </article>
  )
}

export default WareHouseListItem
