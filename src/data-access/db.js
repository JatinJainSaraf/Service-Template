const { Sequelize } = require('sequelize');
const pg = require('../config').pg;

function createSequelizeInstance() {
  // Create a new Sequelize instance with the PostgreSQL connection configuration
  const sequelize = new Sequelize(
    pg.DB_NAME,
    pg.DB_USER,
    pg.DB_PASSWORD,
    {
      host: pg.DB_HOST,
      port: pg.DB_PORT,
      dialect: 'postgres',
    }
  );
  // Check if the database is connected
  sequelize
    .authenticate()
    .then(() => {
      console.log('Database connection has been established successfully.');
    })
    .catch((error) => {
      console.error('Unable to connect to the database:', error);
    });

  return sequelize;
}

module.exports = createSequelizeInstance;
