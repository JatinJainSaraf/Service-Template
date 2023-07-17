const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
// Import the RestRoutes class from rest-routes.js
const { RestRoutes } = require('./rest-routes');

// Import the db.js file
const sequelizeInstance = require('./data-access').sequelizeInstance;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create an instance of RestRoutes and pass the router and sequelize
const restRoutes = new RestRoutes(router);

// Call the start method to set up the routes
restRoutes.start();

const PORT = config.PORT || 3000;

app.use('/', router);

// Synchronize the Sequelize models with the database and start the server
sequelizeInstance.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
  });
});
