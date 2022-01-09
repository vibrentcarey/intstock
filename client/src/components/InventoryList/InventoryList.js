import React from "react";
import InventoryListItem from "../InventoryListItem/InventoryListItem";

const InventoryList = (props) => {
  // props passed from InventoryPage
  const { inventoryList } = props;
  return (
    <>
      {/* map over inventory list */}
      {inventoryList.map((inventory) => {
        return (
          <InventoryListItem
            key={inventory.id}
            name={inventory.itemName}
            category={inventory.category}
            status={inventory.status}
            quantity={inventory.quantity}
            warehouse={inventory.warehouseName}
          />
        );
      })}
    </>
  );
};

export default InventoryList;
