import React from 'react';
import TopBar from '../../components/TopBar';
import EditWarehouseForm from '../../components/WarehouseForm/EditWarehouseForm';

// Warehouse Edit Page
const EditWarehousePage = (props) => {
  return (
    <div>
      <TopBar title='Edit Warehouse' />
      <EditWarehouseForm submitValue='Save' props={props} />
    </div>
  );
};
export default EditWarehousePage;
