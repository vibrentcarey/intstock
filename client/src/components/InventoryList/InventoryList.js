import React from "react";
import InventoryListItem from "../InventoryListItem/InventoryListItem";

const InventoryList = (props) => {
  return (
    <div>
      {/* map over inventory list */}
      {props.inventoryList.map((inventoryList) => {
        return (
          <InventoryListItem
            key={inventoryList.id}
            id={inventoryList.id}
            name={inventoryList.itemName}
            category={inventoryList.category}
            status={inventoryList.status}
            quantity={inventoryList.quantity}
            warehouse={inventoryList.warehouseName}
          />
        );
      })}
    </div>
  );
};

export default InventoryList;
