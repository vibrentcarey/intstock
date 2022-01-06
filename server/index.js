const express = require('express');
const cors = require("cors");
const wareHouseRouter = require('./routes/warehouses');
const inventoryRouter = require('./routes/inventories');

require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;

app.use(cors({
  origin: process.env.CLIENT_URL
}));

app.use('/warehouses', wareHouseRouter);

app.use('/inventories', inventoryRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})

