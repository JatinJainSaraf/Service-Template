import UserModel from "../models/user";
import { UserDb } from "./type";

const makeUsersDb = (): UserDb => {
    return Object.freeze({
        getUserByUserName,
        createUser,
    });

    async function getUserByUserName({ username }: { username: string }): Promise<any> {
        const user = await UserModel.findOne({ where: { username: username }, attributes: ['id'] });
        return user;
    }

    async function createUser({ username }: { username: string }): Promise<any> {
        return await UserModel.create({ username });
    }
};

export default makeUsersDb;
