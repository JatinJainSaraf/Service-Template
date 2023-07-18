import Joi from 'joi';
import jwt from 'jsonwebtoken';
import ValidationError from '../../exceptions';
import makeCreateUser from "./create-user";
import db from '../../data-access';
import { makeCreateUserParams } from './type';

const createUser = makeCreateUser({
    Joi,
    ValidationError,
    userDb: db.userDb,
    jwt,
}as makeCreateUserParams)

const userUseCases = Object.freeze({
   createUser,
  });

  export default userUseCases;