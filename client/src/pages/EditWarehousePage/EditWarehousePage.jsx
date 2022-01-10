import React from 'react';
import TopBar from '../../components/TopBar';
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';

// Warehouse Edit Page
const EditWarehousePage = (props) => {
  return (
    <div>
      <TopBar title='Edit Warehouse' />
      <WarehouseForm submitValue='Save' props={props} />
    </div>
  );
};
export default EditWarehousePage;
