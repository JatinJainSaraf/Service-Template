const Joi = require('joi');
const jwt = require('jsonwebtoken');
const exceptions = require('../../exceptions');
const makeCreateUser = require('./create-user');
const sequelize = require('../../data-access')
const createUser = makeCreateUser({
    Joi,
    ValidationError: exceptions.validationError,
    usersDb:sequelize.userDb ,
    jwt,
})

module.exports = Object.freeze({
   createUser,
  });