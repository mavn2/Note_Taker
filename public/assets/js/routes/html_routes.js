//Required node modules
const path = require('path');

//HTML ROUTES

//Exports routes, uses fn to pass reference to 'app' as parameter
module.exports = app => {
  //Homepage route
  app.get('/', (req, res) => {
    //Sends index.html page
    res.sendFile(path.join(__dirname, '../../../index.html'));
  });

  //Note page route
  app.get('/notes', (req, res) => {
    //Sends notes.html page
    res.sendFile(path.join(__dirname, '../../../notes.html'));
  });
};
