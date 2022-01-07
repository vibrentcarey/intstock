const {Router} = require('express');
const wareHouseRouter = Router();
const fs = require('fs');



// read from file
const readInventoriesData = () => {
  const data = fs.readFileSync('./data/inventories.json');
  return JSON.parse(data);
}
// Fetch warehouse list end point
wareHouseRouter.get('/', (_req, res) => {
 
});

// Fetch a single warehouse
wareHouseRouter.get('/:wareHouseId', (req, res) => {
  
});

// get each warehouse inventory details
wareHouseRouter.get('/:wareHouseId/inventories', (req, res) => {
  const inventoryData = readInventoriesData()
  const wareHouses = inventoryData.filter(inv => inv.warehouseID === req.params.wareHouseId)
  res.status(200).json(wareHouses); 
});

//create warehouse
wareHouseRouter.post('/',(req, res) => {

});

// edit a warehouse
wareHouseRouter.patch('/:wareHouseId', (req, res) => {
 
});

// delete a warehouse
wareHouseRouter.delete('/:wareHouseId', (req,res) => {

})


module.exports = wareHouseRouter;