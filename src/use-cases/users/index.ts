import Joi from 'joi';
import jwt from 'jsonwebtoken';
import ValidationError from '../../exceptions';
import makeCreateUser from "./create-user";
import db from '../../data-access';
const createUser = makeCreateUser({
    Joi,
    ValidationError,
    userDb: db.userDb,
    jwt,
})

const userUseCases = Object.freeze({
   createUser,
  });

  export default userUseCases;