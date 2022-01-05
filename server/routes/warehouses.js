const {Router} = require('express');
const wareHouseRouter = Router();
const fs = require('fs');

// Reuse this function to read data from file
const readWarehouseData = () => {
  const data = fs.readFileSync('./data/warehouses.json');
  return JSON.parse(data);
}

// Fetch warehouse list end point
wareHouseRouter.get('/', (_req, res) => {
  const wareHouseData = readWarehouseData()
  res.status(200).json(wareHouseData)
});

module.exports = wareHouseRouter;