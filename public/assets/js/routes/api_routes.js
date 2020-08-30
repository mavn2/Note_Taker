//Path module required for consistent file access
const path = require('path')

//DB file required for access
const db = path.join(__dirname, '../../../../db/db.json')

//API ROUTES
//module.exports = app => {
  //GET method called by getNote fn
  //app.get('/api/notes', (req, res) => {
    //res.JSON
  //});
  //POST method called by saveNote fn
  //DELETE method called by deleteNote fn
//}