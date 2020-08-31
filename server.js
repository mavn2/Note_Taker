//Required Node modules
//Simplifies working with server
const express = require('express');
//Assists in handling filepaths
const path = require('path');

//Establishes server with express
const app = express();

//Employs express to handle URLS and JSON files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Includes static js/css files in server
app.use(express.static(path.join(__dirname, '/public')));

//Finds port in deployed environment, or sets for local hosting
const PORT = process.env.PORT || 8080;

//Connects server code to route files
require('./routes/html_routes')(app);
require('./routes/api_routes')(app);

//Establishes server, reports back
app.listen(PORT, err => {
  if (err) throw err;
});

