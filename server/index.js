const express = require('express');
const wareHouseRouter = require('./routes/warehouses')

const app = express();

app.use('/warehouses', wareHouseRouter)

app.listen(8080, () => {
  console.log('Server started on port 8080');
})

