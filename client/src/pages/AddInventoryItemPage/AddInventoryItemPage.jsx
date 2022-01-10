import TopBar from '../../components/TopBar';
import InventoryForm from '../../components/InventoryForm/InventoryForm';


// Add New Inventory Item Page
const AddInventoryItemPage = (props) => {
  console.log(props)
  return (
    <div>
      <TopBar title='Add New Inventory Item' />
      <InventoryForm submitValue='+Add Item' props={props} />
    </div>
  )
};

export default AddInventoryItemPage;
