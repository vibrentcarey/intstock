// Inventory Item Details Page
// route - inventory; route - edit inventory item.
import Button from "../../Button/Button";
import TopBar from "../../components/TopBar";
import back from "../../assets/arrow_back-24px.svg";

// {
//   "id": "9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3",
//   "warehouseID": "2922c286-16cd-4d43-ab98-c79f698aeab0",
//   "warehouseName": "Manhattan",
//   "itemName": "Television",
//   "description": "This 50\", 4K LED TV provides a crystal-clear picture and vivid colors.",
//   "category": "Electronics",
//   "status": "In Stock",
//   "quantity": 500
// },

const InventoryItemDetailsPage = (props) => {
  return (
    <main>
      <section>
        <img src={back} alt="back" />

        <h2>Television</h2>
        <div>
          <Button type="edit" value="Edit" />
        </div>
      </section>
      <section>
        <div>
          <div>
            <p>ITEM DESCRIPTION</p>
            <p>
              This 50\", 4K LED TV provides a crystal-clear picture and vivid
              colors.
            </p>
          </div>
          <div>
            <p>CATEGORY</p>
            <p>Electronics</p>
          </div>
        </div>

        <div>
          <div>
            <div>
              <p>STATUS</p>
              <p>In Stock</p>
            </div>
            <div>
              <p>QUANTITY</p>
              <p>500</p>
            </div>
          </div>
          <div>
            <p>WAREHOUSE</p>
            <p>Manhattan</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default InventoryItemDetailsPage;
