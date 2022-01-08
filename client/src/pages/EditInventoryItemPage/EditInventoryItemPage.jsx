import TopBar from '../../components/TopBar';
import InventoryForm from '../../components/InventoryForm/InventoryForm';
import Footer from '../../components/Footer/Footer';

// Edit Inventory Item Page
const EditInventoryItemPage = (props) => {
  return (
    <div>
      {/* Header */}
      <TopBar title='Edit Inventory Item' />
      <InventoryForm submitValue='Save' />
      <Footer />
    </div>
  )
};

export default EditInventoryItemPage;
