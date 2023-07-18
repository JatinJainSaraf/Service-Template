import Joi from "joi";
import ValidationError from "../exceptions";
import { buildMakeUser } from "./user";
import { buildMakeUserParams } from "./type";

const makeUser = buildMakeUser({ Joi, ValidationError } as buildMakeUserParams);
export default makeUser;
