const { Router } = require("express");
const express = require("express");
const wareHouseRouter = Router();
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

// Fetch a single warehouse
// wareHouseRouter.get("/:warehouseId", (req, res) => {
//   const wareHouseList = readFile();
//   const warehouse = wareHouseList.find(
//     (warehouse) => warehouse.id === req.params.warehouseId
//   );

//   if (!warehouse) {
//     return res.status(404).send("Warehouse not found");
//   }
//   return res.status(200).json(warehouse);
// });

//create warehouse
wareHouseRouter.post("/", (req, res) => {});

// edit a warehouse
wareHouseRouter.patch("/:wareHouseId", (req, res) => {});

// delete a warehouse
wareHouseRouter.delete("/:wareHouseId", (req, res) => {});

module.exports = wareHouseRouter;
