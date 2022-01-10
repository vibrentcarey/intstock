import React from 'react';
import TopBar from '../../components/TopBar';
<<<<<<< HEAD
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';
=======
import EditWarehouseForm from '../../components/WarehouseForm/EditWarehouseForm';

>>>>>>> develop

// Warehouse Edit Page
const EditWarehousePage = (props) => {
  console.log(props)
  return (
    <div>
      <TopBar title='Edit Warehouse' />
<<<<<<< HEAD
      <WarehouseForm submitValue='Save' props={props} />
=======
      <EditWarehouseForm submitValue='Save' props={props} />
>>>>>>> develop
    </div>
  );
};
export default EditWarehousePage;
