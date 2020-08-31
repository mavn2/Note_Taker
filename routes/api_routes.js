//Path module required for consistent file access
const path = require('path');

//DB file required for access
let noteDb = require(path.join(__dirname, '../db/db.json'));

//API ROUTES
module.exports = app => {
  //GET method called by getNote fn
  app.get('/api/notes', (req, res) => {
    //Returns contents of database file
    res.json(noteDb);
  });

  //POST method called by saveNote fn
  app.post('/api/notes', (req, res) => {
    //Assigns note an id greater then 0
    req.body.id = noteDb.length + 1;

    //Pushes new note object to array
    noteDb.push(req.body);

    //Ends response process
    res.end();
  });

  //DELETE method called by deleteNote fn
  app.delete('/api/notes/*', (req, res) => {
    //Retrieves/saves note id number from url
    let id = (path.parse(req.url).name);

    //Creates a new array excluding the identified note
    let newDb = noteDb.filter(note => {
      return note.id != id;
    });

    //Sets database equal to array created above
    noteDb = newDb;

    //Ends response process
    res.end();
  });
};