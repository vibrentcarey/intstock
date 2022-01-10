import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import InventoryItemDetailsPage from "./pages/InventoryItemDetailsPage/InventoryItemDetailsPage";
import EditInventoryItemPage from "./pages/EditInventoryItemPage/EditInventoryItemPage";
import AddInventoryItemPage from "./pages/AddInventoryItemPage/AddInventoryItemPage";
import Dev from "./pages/Dev/Dev";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";

// InStock Application
class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact={true} component={WarehousesPage} />
            <Route
              path="/warehouse-details/:warehouseId"
              component={WarehouseDetailsPage}
            />
            <Route
              path="/edit-warehouse/:warehouseId"
              render={(routerProps) => {
                return <EditWarehousePage {...routerProps} />
              }} />
            <Route path="/add-warehouse" component={AddWarehousePage} />
            <Route path="/inventory" component={InventoryPage} />
            <Route
              path="/inventory-item-details/:inventoryItemId"
              component={InventoryItemDetailsPage}
            />
            <Route
              path="/edit-inventory-item/:inventoryItemId"
              component={EditInventoryItemPage}
            />
            <Route
              path="/add-inventory-item"
              component={AddInventoryItemPage}
            />

            <Route path="/dev" component={Dev} />
            <Route
              path="/warehouses/inventories/:warehouseId"
              render={(routerProps) => {
                return <WarehouseDetailsPage {...routerProps} />;
              }}
            />
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
