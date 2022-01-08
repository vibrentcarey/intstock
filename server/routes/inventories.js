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
inventoriesRouter.get("/:inventoryId", (req, res) => {});

//create single inventory list
inventoriesRouter.post("/", (req, res) => {});

// edit an inventory
inventoriesRouter.patch("/:inventoryId", (req, res) => {});

// delete an inventory
inventoriesRouter.delete("/:inventoryId", (req, res) => {});

module.exports = inventoriesRouter;
