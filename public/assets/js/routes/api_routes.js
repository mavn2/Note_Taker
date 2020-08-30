//Path module required for consistent file access
const path = require('path')

//DB file required for access
const db = require(path.join(__dirname, '../../../../db/db.json'))
console.log(db)
//API ROUTES
module.exports = app => {
  //GET method called by getNote fn
  app.get('/api/notes', (req, res) => {
    console.log(req)
    res.json(db)
    console.log(res.json(db))
  });
  //POST method called by saveNote fn
  //DELETE method called by deleteNote fn
}