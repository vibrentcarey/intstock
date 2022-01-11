import React from "react";
import InventoryItem from "../InventoryItem/InventoryItem";

const WarehouseInventory = (props) => {
  // props passed from Warehouse Details page
  const { inventoryList } = props;
  console.log(props)
  return (
    <>
      {/* map over inventory list */}
      {inventoryList.map((inventory) => {
        return (
          
          
          <InventoryItem
            key={inventory.id}
            name={inventory.itemName}
            category={inventory.category}
            quantity={inventory.quantity}
            id={inventory.id}
          />
        );
      })}
    </>
  );
};

export default WarehouseInventory;
