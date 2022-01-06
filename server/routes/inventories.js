const {Router} = require('express');
const inventoriesRouter = Router();


// Fetch inventory list end point
inventoriesRouter.get('/', (_req, res) => {
  
});

// Fetch a single inventory
inventoriesRouter.get('/:inventoryId', (req, res) => {
 
})

//create single inventory list
inventoriesRouter.post('/',(req, res) => {

});

// edit an inventory
inventoriesRouter.patch('/:inventoryId', (req, res) => {
 
});

// delete an inventory
inventoriesRouter.delete('/:inventoryId', (req,res) => {

})

module.exports = inventoriesRouter;