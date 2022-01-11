import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";
import TopBar from "../../components/TopBar";

// Add New Warehouse Page
const AddWarehousePage = (props) => {
  return (
    <>
      <TopBar title='Add New Warehouse' />
      <WarehouseForm submitValue='+Add Warehouse' />
    </>
  )
}

export default AddWarehousePage
