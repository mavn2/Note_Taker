//Path module required for consistent file access
const path = require('path')

//DB file required for access
const noteDb = require(path.join(__dirname, '../../../../db/db.json'))

//API ROUTES
module.exports = app => {
  //GET method called by getNote fn
  app.get('/api/notes', (req, res) => {
    res.json(noteDb)
  });
  //POST method called by saveNote fn
  app.post('/api/notes', (req, res) => {
    noteDb.push(req.body)
  })
  //DELETE method called by deleteNote fn
}