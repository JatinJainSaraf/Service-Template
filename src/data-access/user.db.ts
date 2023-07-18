import UserModel from "../models/user";
const makeUsersDb = ()=> {
    return Object.freeze({
        getUserByUserName,
        createUser,
    });
    async function getUserByUserName({ username }: {username:string}) {
        const user = await UserModel.findOne({ where: { username: username }, attributes: ['id'] });
        return user;
    }
    async function createUser({username}: {username:string}){
        return await UserModel.create({username})
    }
}

export default makeUsersDb;