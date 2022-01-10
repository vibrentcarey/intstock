import React from 'react';
import Header from '../../components/Header/Header';
import TopBar from '../../components/TopBar';
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';
import Footer from '../../components/Footer/Footer';

// Warehouse Edit Page
const EditWarehousePage = (props) => {
  return (
    <div>
      <TopBar title='Edit Warehouse' />
      <WarehouseForm submitValue='Save' />
      <Footer />
    </div>
  );
};
export default EditWarehousePage;
