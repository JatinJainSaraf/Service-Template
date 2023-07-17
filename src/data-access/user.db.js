const UserModel = require('../models/user');
function makeUsersDb() {
    return Object.freeze({
        getUserByUserName,
        createUser,
    });
    async function getUserByUserName({ username }) {
        const user = await UserModel.findOne({ where: { username: username }, attributes: ['id'] });
        return user;
    }
    async function createUser({username}){
        return await UserModel.create({username})
    }
}

module.exports = makeUsersDb;