
import React from 'react';
import WareHouseListItem from '../../WareHouseListItem/WareHouseListItem';
import Stock from "../../components/stock/Stock";
import InventoryItem from '../../components/InventoryItem/InventoryItem';


const Dev = () => {
  return (
    <div>
      <Stock instock={true} />
      <Stock instock={false} />

      <WareHouseListItem
        wareHouseName='Manhattan'
        address="503 Adreess Road"
        contactName="Permin Aujia"
        email="pauji@gmail.com"
        phone="1(333)333-3333"
      />
      <InventoryItem
        name='Television'
        category= 'Electronics'
        quantity='500'
       
      />
      {/* <Footer /> */}
    </div>
  )
}

export default Dev

