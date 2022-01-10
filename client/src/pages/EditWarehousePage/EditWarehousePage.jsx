import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import TopBar from '../../components/TopBar';
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';
import Footer from '../../components/Footer/Footer';

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
