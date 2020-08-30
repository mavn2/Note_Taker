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
//require('./routes')

//Establishes server, reports back
app.listen(PORT, err => {
  if (err) throw err;
  console.log(`listening ${PORT}`);
});


  //Homepage
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../index.html'));
    console.log('hello')
  });

  //Note page route
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../notes.html'));
  });
