import createSequelizeInstance from './db'
const sequelizeInstance = createSequelizeInstance();
import makeUsersDb from './user.db';
const userDb= makeUsersDb();
const db = {
    sequelizeInstance, userDb
};

export default db;