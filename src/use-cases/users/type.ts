import { UserDb } from "../../data-access/type";
export interface makeCreateUserParams  {
    Joi: any,
    ValidationError: any,
    userDb: UserDb,
    jwt: any,
}