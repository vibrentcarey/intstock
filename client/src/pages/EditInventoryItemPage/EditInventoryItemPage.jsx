import React from 'react';
import TopBar from '../../components/TopBar';
import InventoryForm from '../../components/InventoryForm/InventoryForm';

// Edit Inventory Item Page
const EditInventoryItemPage = (props) => {
  return (
    <>
      <TopBar title='Edit Inventory Item' />
      <InventoryForm submitValue='Save' props={props} />
    </>
  )
};

export default EditInventoryItemPage;
