import React from "react";
import TopBar from "../../components/TopBar";
import InventoryForm from "../../components/InventoryForm/InventoryForm";
import Card from "../../components/Card/Card";

// Edit Inventory Item Page
const EditInventoryItemPage = (props) => {
  return (
    <Card>
      <TopBar title="Edit Inventory Item" />
      <InventoryForm submitValue="Save" {...props} />
    </Card>
  );
};

export default EditInventoryItemPage;
