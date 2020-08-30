//Required NPM module(s)
const express = require('express')
const path = require('path')

//Shorthand for calling express methods
const app = express()

//Finds port in deployed environment, or sets for local hosting
const PORT = process.env.PORT || 8080

//Test Check
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`testing on ${PORT}`)
})