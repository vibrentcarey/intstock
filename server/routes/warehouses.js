const {Router} = require('express');
const wareHouseRouter = Router();
const fs = require('fs');


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