const { Router } = require("express");
const express = require("express");
const inventoriesRouter = Router();
const fs = require("fs");
const inventoriesData = require("../data/inventories.json");
const { v4: uuid } = require('uuid');


//Read the Inventories file from the local database
const readFile = () => {
  const inventoriesList = fs.readFileSync("./data/inventories.json");
  return JSON.parse(inventoriesList);
};

//write to inventory file
const writeFile = (inventoryList) => {
  fs.writeFileSync('./data/inventories.json', JSON.stringify(inventoryList, null, 2));
}

// Fetch inventory list end point
inventoriesRouter.get("/", (_req, res) => {
  let inventoriesList = readFile();
  inventoriesList = inventoriesList.map((inventories) => {
    return {
      item: inventories.itemName,
      category: inventories.category,
      status: inventories.status,
      qty: inventories.quantity,
    };
  });
  return res.status(200).send(inventoriesList);
});
inventoriesRouter.get('/:warehouseId', (req, res) => {

});

// Fetch a single inventory
inventoriesRouter.get("/:inventoryId", (req, res) => { });

//create single inventory item
inventoriesRouter.post("/:warehouseId", (req, res) => {
  const inventoryData = readFile();
  if (
    !req.body.warehouseName ||
    !req.body.itemName ||
    !req.body.description ||
    !req.body.category ||
    !req.body.status ||
    !req.body.quantity 
     
  ) {
    return res.status(400).send('Ensure you include all required field.');
  }
  const newInventory = {
    id: uuid(),
    warehouseID: req.params.warehouseId,
    warehouseName: req.body.warehouseName,
    itemName: req.body.itemName,
    description: req.body.description,
    category: req.body.category,
    status: req.body.status,
    quantity: req.body.quantity
    
  }
  inventoryData.push(newInventory);
  writeFile(inventoryData);

  res.status(201).json(newInventory);

});



// edit an inventory
inventoriesRouter.patch("/:inventoryId", (req, res) => { });

// delete an inventory
inventoriesRouter.delete("/:inventoryId", (req, res) => {
  // Get the id from params
  const inventoryId = req.params.inventoryId;
  const inventory = readFile();
  // Filter out the item to be deleted and update file
  const updatedInventory = inventory.filter(item => item.id !== inventoryId);
  // Validate that an item was deleted
  if (updatedInventory.length === inventory.length) {
    return res.status(400).json({ message: 'Could not find matching item' });
  }
  // Update file and send response
  fs.writeFileSync('./data/inventories.json', JSON.stringify(updatedInventory));
  res.status(200).json({ message: 'Successfully deleted item' });
});

module.exports = inventoriesRouter;
