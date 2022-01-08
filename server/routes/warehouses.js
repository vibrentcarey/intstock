const { Router } = require('express');
const wareHouseRouter = Router();
const express = require("express");
const fs = require("fs");
const wareHouseData = require("../data/warehouses.json");

//Read the file from the local database
const readFile = () => {
  const wareHouseList = fs.readFileSync("./data/warehouses.json");
  return JSON.parse(wareHouseList);
};

// Fetch warehouse list end point
wareHouseRouter.get("/", (_req, res) => {
  let wareHouseList = readFile();
  // console.log(wareHouseList);
  wareHouseList = wareHouseList.map((warehouse) => {
    return {
      id: warehouse.id,
      name: warehouse.name,
      address: warehouse.address,
      contact: warehouse.contact.name,
      phone: warehouse.contact.phone,
      email: warehouse.contact.email,
    };
  });
  return res.status(200).send(wareHouseList);
});

const readInventoriesData = () => {
  const data = fs.readFileSync('./data/inventories.json');
  return JSON.parse(data);
}
// Fetch warehouse list end point
wareHouseRouter.get('/', (_req, res) => {

});

// Fetch a single warehouse
<<<<<<< HEAD
<<<<<<< HEAD
wareHouseRouter.get("/:warehouseId", (req, res) => {});
=======
wareHouseRouter.get('/:wareHouseId', (req, res) => {

});

// get each warehouse inventory details
wareHouseRouter.get('/:wareHouseId/inventories', (req, res) => {
  const inventoryData = readInventoriesData()
  const wareHouses = inventoryData.filter(inv => inv.warehouseID === req.params.wareHouseId)
  res.status(200).json(wareHouses);
});
>>>>>>> develop
=======
wareHouseRouter.get("/:warehouseId", (req, res) => {});
>>>>>>> ecfab68c99e079a91a94e4c6e3b27c9523f65872

//create warehouse
wareHouseRouter.post('/', (req, res) => {
  const warehouses = readFile();
  // Validate request details
  if (!req.body || !req.body.name || !req.body.address || !req.body.city || !req.body.country || !req.body.contact) {
    // Send back error message
    return res.status(400).json({ message: 'Please send required fields' });
  }
  // Add new warehouse to file
  warehouses.push(req.body);
  fs.writeFileSync('./data/warehouses.json', JSON.stringify(warehouses));
  res.status(200).json({ message: 'Successfully Created Warehouse' });
});

// edit a warehouse
wareHouseRouter.patch('/:wareHouseId', (req, res) => {

});

// delete a warehouse
wareHouseRouter.delete('/:wareHouseId', (req, res) => {

})


module.exports = wareHouseRouter;