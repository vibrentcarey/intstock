const { Router } = require("express");
const express = require("express");
const inventoriesRouter = Router();
const fs = require("fs");
const inventoriesData = require("../data/inventories.json");

//Read the Inventories file from the local database
const readFile = () => {
  const inventoriesList = fs.readFileSync("./data/inventories.json");
  return JSON.parse(inventoriesList);
};
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

//create single inventory list
inventoriesRouter.post("/", (req, res) => { });

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
