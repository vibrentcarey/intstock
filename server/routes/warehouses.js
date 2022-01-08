const { Router } = require("express");
const express = require("express");
const wareHouseRouter = Router();
const fs = require("fs");
const wareHouseData = require("../data/warehouses.json");

// write and update date in warehouses.json file
const writeFile = (wareHouseList) => {
  fs.writeFileSync('./data/warehouses.json', JSON.stringify(wareHouseList, null, 2));
}

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
wareHouseRouter.get("/:warehouseId", (req, res) => { });

//create warehouse
wareHouseRouter.post("/", (req, res) => { });

// edit a warehouse
wareHouseRouter.put("/:wareHouseId", (req, res) => {
  let wareHouseList = readFile();
  const foundWareHouse = wareHouseList.find(wareHouse => wareHouse.id === req.params.wareHouseId);
  // match req.params.wareHouseId with id from data
  if (!foundWareHouse) {
    return res.status(404).send('Warehouse not found');
  }
  // after matching to validate form
  if (
    !req.body.name ||
    !req.body.address ||
    !req.body.city ||
    !req.body.country ||
    !req.body.contact.name ||
    !req.body.contact.position ||
    !req.body.contact.phone ||
    !req.body.contact.email
  ) {
    return res.status(400).send('Please make sure to include warehouse details and contact details of the warehouse');
  }
  //  what information will be update
  const updatedWareHouse = {
    id: foundWareHouse.id,
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    contact: {
      name: req.body.contact.name,
      position: req.body.contact.position,
      phone: req.body.contact.phone,
      email: req.body.contact.email
    }
  }

  wareHouseList = wareHouseList.map(wareHouse => {
    if (wareHouse.id === foundWareHouse.id) {
      return updatedWareHouse;
    } else {
      return wareHouse;
    }
  });

  writeFile(wareHouseList);

  return res.status(200).send(updatedWareHouse);
})

// delete a warehouse
wareHouseRouter.delete("/:wareHouseId", (req, res) => { });

module.exports = wareHouseRouter;
