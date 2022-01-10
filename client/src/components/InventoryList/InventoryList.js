import React from "react";
import { Link } from 'react-router-dom';
import InventoryListItem from "../InventoryListItem/InventoryListItem";

const InventoryList = (props) => {
  return (
    <div>
      {props.inventoryList.map((inventoryList) => {
        const inventoryId = inventoryList.id
        return (
          <Link to={`inventory-item-details/${inventoryId}`}  key={inventoryList.id}>
            <InventoryListItem
              key={inventoryList.id}
              id={inventoryList.id}
              name={inventoryList.itemName}
              category={inventoryList.category}
              status={inventoryList.status}
              quantity={inventoryList.quantity}
              warehouse_Id={inventoryList.warehouseId}
              warehouse={inventoryList.warehouseName}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default InventoryList;
