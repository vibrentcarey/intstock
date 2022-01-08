import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";
import TopBar from "../../components/TopBar";

// Add New Warehouse Page
const AddWarehousePage = (props) => {
  return (
    <div>
      <TopBar title="Add Warehouse" />
      <WarehouseForm submitValue="Save" />
    </div>
  );
};

export default AddWarehousePage;
