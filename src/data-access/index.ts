import createSequelizeInstance from './db'
import { UserDb } from './type';
import makeUsersDb from './user.db';

const sequelizeInstance = createSequelizeInstance();
const userDb= makeUsersDb()as UserDb;
const db = {
    sequelizeInstance, userDb
};

export default db;