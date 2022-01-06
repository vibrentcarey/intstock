const {Router} = require('express');
const inventoriesRouter = Router();
const fs = require('fs');

// Reuse this function to read data from file
const readInventoriesData = () => {
  const data = fs.readFileSync('./data/inventories.json');
  return JSON.parse(data);
}

// Fetch inventory list end point
inventoriesRouter.get('/', (_req, res) => {
  const inventoryData = readInventoriesData()
  res.status(200).json(inventoryData)
});

// Fetch a single inventory
inventoriesRouter.get('/:inventoryId', (req, res) => {
  const inventoryData = readInventoriesData();

  const inventoryDetails = inventoryData.find(inventory => inventory.id === req.params.inventoryId);

  if(!inventoryDetails) {
    return res.status(404).json().send('The inventory you requested does not exist!')
  }
  res.status(200).json(inventoryDetails);
})

module.exports = inventoriesRouter;