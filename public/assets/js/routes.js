//Required node modules
const path = require('path')

//HTML ROUTES

//Exports routes, uses fn to pass reference to 'app' as parameter
module.exports = function(app) {
  //Homepage route
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../index.html'));
  });

  //Note page route
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../notes.html'));
  });
}
//API ROUTES
//GET method to be called with getNote fn
//POST method to be called with saveNote fn
//DELETE method to be called with deleteNote fn