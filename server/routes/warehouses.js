const { Router } = require("express");
const wareHouseRouter = Router();
const express = require("express");
const fs = require("fs");
const wareHouseData = require("../data/warehouses.json");

// write and update date in warehouses.json file
const writeFile = (wareHouseList) => {
  fs.writeFileSync(
    "./data/warehouses.json",
    JSON.stringify(wareHouseList, null, 2)
  );
};

//Read the file from the local database
const readFile = () => {
  const wareHouseList = fs.readFileSync("./data/warehouses.json");
  return JSON.parse(wareHouseList);
};

// Fetch all the data from warehouse list end point
wareHouseRouter.get("/", (_req, res) => {
  let wareHouseList = readFile();
  return res.status(200).send(wareHouseList);
});

const readInventoriesData = () => {
  const data = fs.readFileSync("./data/inventories.json");
  return JSON.parse(data);
};

// Fetch a single warehouse
wareHouseRouter.get("/:warehouseId", (req, res) => {
  let wareHouseList = readFile();
  const warehouseInfo = wareHouseList.find(warehouse => warehouse.id === req.params.warehouseId)
  if (!warehouseInfo) {
    res.status(400).send({ message: `There is no warehouse with id of ${req.params.warehouseId}` })
  }
  res.status(200).json(warehouseInfo)
});

// get each warehouse inventory details
wareHouseRouter.get('/:wareHouseId/inventories', (req, res) => {
  const inventoryData = readInventoriesData()
  const wareHouses = inventoryData.filter(inv => inv.warehouseID === req.params.wareHouseId)
  res.status(200).json(wareHouses);
});

//create warehouse
wareHouseRouter.post('/', (req, res) => {
  const warehouses = readFile();
  // Validate request details
  if (!req.body || !req.body.name || !req.body.address || !req.body.city || !req.body.country || !req.body.contact) {
    // Send back error message
    return res.status(400).json({ message: 'Please send required fields' });
  }

  // add new warehouse to file
  warehouses.push(req.body);
  fs.writeFileSync('./data/warehouses.json', JSON.stringify(warehouses));
  res.status(200).json({ message: 'Successfully Created Warehouse' });
});

// edit a warehouse
wareHouseRouter.put("/:wareHouseId", (req, res) => {
  let wareHouseList = readFile();
  const foundWareHouse = wareHouseList.find(
    (wareHouse) => wareHouse.id === req.params.wareHouseId
  );
  // match req.params.wareHouseId with id from data
  if (!foundWareHouse) {
    return res.status(404).send({ message: 'Warehouse not found' });
  }
  // after matching to validate form
  // Need to add validate phone and email
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
    return res.status(400).send({ message: 'Please make sure to include warehouse details and contact details of the warehouse' });
  }
  //  which information will be update
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
      email: req.body.contact.email,
    },
  };

  wareHouseList = wareHouseList.map((wareHouse) => {
    if (wareHouse.id === foundWareHouse.id) {
      return updatedWareHouse;
    } else {
      return wareHouse;
    }
  });

  writeFile(wareHouseList);
})

// get each warehouse inventory details
wareHouseRouter.get("/:wareHouseId/inventories", (req, res) => {
  const inventoryData = readInventoriesData();
  console.log(readInventoriesData);
  const wareHouses = inventoryData.filter(
    (inv) => inv.warehouseID === req.params.wareHouseId
  );
  res.status(200).json(wareHouses);
});

//create warehouse
wareHouseRouter.post("/", (req, res) => {
  const warehouses = readFile();
  // Validate request details
  if (
    !req.body ||
    !req.body.name ||
    !req.body.address ||
    !req.body.city ||
    !req.body.country ||
    !req.body.contact
  ) {
    // Send back error message
    return res.status(400).json({ message: "Please send required fields" });
  }
  // Add new warehouse to file
  warehouses.push(req.body);
  fs.writeFileSync("./data/warehouses.json", JSON.stringify(warehouses));
  res.status(200).json({ message: "Successfully Created Warehouse" });
});


// delete a warehouse
wareHouseRouter.delete("/:wareHouseId", (req, res) => {
  return res.status(200).send(updatedWareHouse);
});

module.exports = wareHouseRouter;
