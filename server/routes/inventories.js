const {Router} = require('express');
const inventoriesRouter = Router();
const fs = require('fs');


const readInventoriesData = () => {
  const data = fs.readFileSync('./data/inventories.json');
  return JSON.parse(data);
}
const readWarehouseData = () => {
  const data = fs.readFileSync('./data/warehouses.json');
  return JSON.parse(data);
}


// Fetch inventory list end point
inventoriesRouter.get('/', (_req, res) => {
  const inventoryData = readInventoriesData()
  res.status(200).json(inventoryData)
  
});
inventoriesRouter.get('/:warehouseId', (req, res) => {
  const inventoryData = readInventoriesData()
  const warehouseData = readWarehouseData()
  const wareHouseId = warehouseData.find(wareHouse => wareHouse.id === req.params.wareHouseId);
  const inventories = inventoryData.find(inventory => inventory.wareHouseId === wareHouseId);

  res.status(200).json(inventories)
  
});

// Fetch a single inventory
inventoriesRouter.get('/:inventoryId', (req, res) => {
 
})

//create single inventory list
inventoriesRouter.post('/',(req, res) => {

});

// edit an inventory
inventoriesRouter.patch('/:inventoryId', (req, res) => {
 
});

// delete an inventory
inventoriesRouter.delete('/:inventoryId', (req,res) => {

})

module.exports = inventoriesRouter;