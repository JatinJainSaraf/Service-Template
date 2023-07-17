const Joi = require('joi');
const formatResponse = require('../format-response').formatResponse;
const formatError = require('../format-response').formatError;
const exceptions = require('../../exceptions');
const useCases = require('../../use-cases');
const makeCreateUserAction = require('./create-user');
const createUserAction = makeCreateUserAction({
    Joi,
    formatError,
    formatResponse,
    createUser: useCases.users.createUser,
    ValidationError: exceptions.validationError,
})

const controller = Object.freeze({
    createUserAction,
  });
module.exports=controller;
