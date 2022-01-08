import TopBar from '../../components/TopBar';
import InventoryForm from '../../components/InventoryForm/InventoryForm';
import Footer from '../../components/Footer/Footer';

// Add New Inventory Item Page
const AddInventoryItemPage = (props) => {
  return (
    <div>
      {/* Header */}
      <TopBar title='Add New Inventory Item' />
      <InventoryForm submitValue='+Add Item' />
      <Footer />
    </div>
  )
};

export default AddInventoryItemPage;
