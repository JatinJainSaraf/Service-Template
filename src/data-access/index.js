const createSequelizeInstance = require('./db');
const sequelizeInstance = createSequelizeInstance();

const makeUserDb = require('./user.db');
const userDb= makeUserDb({sequelizeInstance});
module.exports= {
    sequelizeInstance, userDb
};