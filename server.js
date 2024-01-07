const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extend: true }));
app.use(express.static('public'));

// Set up Routes HERE
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./api/apiRoutes');

app.use('/', htmlRoutes);
app.use('/', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on the port ${PORT}`);
});