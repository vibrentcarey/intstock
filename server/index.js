const express = require('express');
const cors = require("cors");
const wareHouseRouter = require('./routes/warehouses');
const inventoryRouter = require('./routes/inventories');

const app = express();

app.use(express.json());

app.use(cors({
  origin: process.env.CLIENT_URL
}));

app.use('/warehouses', wareHouseRouter);

app.use('/inventories', inventoryRouter);

app.listen(8080, () => {
  console.log('Server started on port 8080');
})

