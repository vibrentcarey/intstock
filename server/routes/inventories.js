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
inventoriesRouter.patch("/:inventoryId", (req, res) => {
  let inventoriesData = readFile();
  const foundInventory = inventoriesData.find(
    (inventories) => inventories.id === req.params.inventoryId
  );
  if (!foundInventory) {
    return res.status(400).send({ error: "Item not found" });
  }

  if (
    !req.body.itemName &&
    !req.body.description &&
    !req.body.category &&
    !req.body.status &&
    !req.body.warehouseName
  ) {
    return res
      .status(400)
      .send(
        "Please make sure to include Item Name, Description, Category, Status and Warehouse Name"
      );
  }

  const updatedInventory = {
    id: foundInventory.id,
    itemName: req.body.itemName,
    description: req.body.description,
    category: req.body.category,
    status: req.body.status,
    warehouseName: req.body.warehouseName,
  };
  inventoriesData = inventoriesData.map((inventories) => {
    if (inventories.id === foundInventory.id) {
      return updatedInventory;
    } else {
      return inventories;
    }
  });
  writeFile(inventoriesData);
  console.log();
  return res.status(200).send(updatedInventory);
});

// delete an inventory
inventoriesRouter.delete("/:inventoryId", (req, res) => {
  console.log(req.params.inventoryId);
  // Get the id from params
  const inventoryId = req.params.inventoryId;
  const inventory = readFile();
  // Filter out the item to be deleted and update file
  const updatedInventory = inventory.filter((item) => item.id !== inventoryId);
  // Validate that an item was deleted
  if (updatedInventory.length === inventory.length) {
    return res.status(400).json({ message: "Could not find matching item" });
  }
  // Update file and send response
  fs.writeFileSync("./data/inventories.json", JSON.stringify(updatedInventory));
  res.status(200).json({ message: "Successfully deleted item" });
});

module.exports = inventoriesRouter;
