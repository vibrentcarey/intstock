import React from "react";
import WarehouseList from "../WarehouseList/WarehouseList";

const WarehouseListItem = (props) => {
  return (
    <div>
      {props.warehouseList.map((warehouseList) => {
        return (
          <WarehouseList
            key={warehouseList.id}
            id={warehouseList.id}
            name={warehouseList.name}
            address={warehouseList.address}
            contact_Name={warehouseList.contact.name}
            phone={warehouseList.contact.phone}
            email={warehouseList.contact.email}
          />
        );
      })}
    </div>
  );
};
export default WarehouseListItem;
