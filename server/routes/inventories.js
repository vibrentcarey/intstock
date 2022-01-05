const {Router} = require('express');
const inventoriesRouter = Router();
const fs = require('fs');

// Reuse this function to read data from file
const readInventoriesData = () => {
  const data = fs.readFileSync('./data/inventories.json');
  return JSON.parse(data);
}

// Fetch warehouse list end point
inventoriesRouter.get('/', (_req, res) => {
  const inventory = readInventoriesData()
  res.status(200).json(inventory)
});

module.exports = inventoriesRouter;