const express = require('express');
const wareHouseRouter = require('./routes/warehouses');
const inventoryRouter = require('./routes/inventories');

const app = express();


app.use('/warehouses', wareHouseRouter);

app.use('/inventories', inventoryRouter);

app.listen(8080, () => {
  console.log('Server started on port 8080');
})

