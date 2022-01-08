import TopBar from '../../components/TopBar';
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';
import Footer from '../../components/Footer/Footer';

// Warehouse Edit Page
const EditWarehousePage = (props) => {
  return (
    <div>
      {/* Header */}
      <TopBar title='Edit Warehouse' />
      <WarehouseForm submitValue='Save' />
      <Footer />
    </div>
  )
};

export default EditWarehousePage;
