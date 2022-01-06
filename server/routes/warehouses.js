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
  res.status(200).json(wareHouseData);
});

// Fetch a single warehouse
wareHouseRouter.get('/:wareHouseId', (req, res) => {
  const wareHouseData = readWarehouseData();

  const wareHouseDetails = wareHouseData.find(wareHouse => wareHouse.id === req.params.wareHouseId);

  if(!wareHouseDetails) {
    return res.status(404).json().send('The warehouse you requested does not exist!')
  }
  res.status(200).json(wareHouseDetails);
});



module.exports = wareHouseRouter;