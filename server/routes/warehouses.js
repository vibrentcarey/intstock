const {Router} = require('express');
const wareHouseRouter = Router();

// Fetch warehouse list end point
wareHouseRouter.get('/', (_req, res) => {
  
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