//Required NPM module(s)
const express = require('express')
const path = require('path')

//Establishes express server
const app = express()

//Employs express to handle URLS and JSON files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Finds port in deployed environment, or sets for local hosting
const PORT = process.env.PORT || 8080

//Connects server code to route files
require('./routes')(app)

//Establishes server, reports back
app.listen(PORT, err => {
  if (err) throw err;
  console.log(`listening ${PORT}`);
});

