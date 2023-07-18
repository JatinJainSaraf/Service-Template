import { Sequelize } from "sequelize";
import config from "../config";

const createSequelizeInstance = () => {
  // Create a new Sequelize instance with the PostgreSQL connection configuration
  const sequelize = new Sequelize(
    config.pg.DB_NAME,
    config.pg.DB_USER,
    config.pg.DB_PASSWORD,
    {
      host: config.pg.DB_HOST,
      port: config.pg.DB_PORT,
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
export default createSequelizeInstance;
