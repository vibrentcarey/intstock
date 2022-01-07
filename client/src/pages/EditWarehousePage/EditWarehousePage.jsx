import React from 'react';
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';

// Warehouse Edit Page
const EditWarehousePage = (props) => {
  return (
    <div>
      <h1>Warehouse Edit Page</h1>
      <WarehouseForm submitValue='Save' />
    </div>
  );
};
export default EditWarehousePage;
