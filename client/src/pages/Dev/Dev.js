import React from 'react';
import WareHouseListItem from '../../WareHouseListItem/WareHouseListItem';

const Dev = () => {
  return (
    // wareHouseName, address, contactName, email, phone
    <div>
      <WareHouseListItem 
        wareHouseName='Manhattan'
        address="503 Adreess Road"
        contactName= "Permin Aujia"
        email= "pauji@gmail.com"
        phone= "1(333)333-3333"
      />
    </div>
  )
}

export default Dev
