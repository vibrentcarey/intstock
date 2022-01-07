
import React from 'react';
import WareHouseListItem from '../../WareHouseListItem/WareHouseListItem';
import Stock from "../../components/stock/Stock";
import EditWarehousePage from '../EditWarehousePage/EditWarehousePage';
import AddWarehousePage from '../AddWarehousePage/AddWarehousePage';

const Dev = () => {
  return (
    <div>
      {/* <Stock instock={true} />
      <Stock instock={false} />
      <WareHouseListItem
        wareHouseName='Manhattan'
        address="503 Adreess Road"
        contactName="Permin Aujia"
        email="pauji@gmail.com"
        phone="1(333)333-3333"
      /> */}
      {/* <EditWarehousePage /> */}
      <AddWarehousePage />
    </div>
  )
}

export default Dev

