import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";
import TopBar from "../../components/TopBar";

// Add New Warehouse Page
const AddWarehousePage = (props) => {
  return (
    <>
      <TopBar title='Edit Inventory Item' />
      <WarehouseForm submitValue='Save' />
    </>
  )
}

export default AddWarehousePage
