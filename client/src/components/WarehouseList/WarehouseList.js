import React from "react";
import WarehouseListItem from "../WarehouseListItem/WarehouseListItem";

const WarehouseList = (props) => {
  console.log(props.warehouseList)
  return (
    <div>
      {props.warehouseList.map((warehouseList) => {
        console.log(warehouseList)
        // console.log(warehouseList.contact.position)
        // console.log(warehouseList.contact.name)
        return (
          <WarehouseListItem
            key={warehouseList.id}
            id={warehouseList.id}
            name={warehouseList.name}
            address={warehouseList.address}
            contact_Name={warehouseList.contact.name || warehouseList.name}
            phone={warehouseList.contact.phone || warehouseList.phone}
            email={warehouseList.contact.email}
            position={warehouseList.contact.position || warehouseList.position}
            onClick={props.onClick}
          />
        );
      })}
    </div>
  );
};
export default WarehouseList;
