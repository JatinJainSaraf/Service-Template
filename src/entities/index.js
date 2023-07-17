const Joi = require('joi')
const ValidationError = require('../exceptions/validation.error');
const buildMakeUser = require('./user');
const makeUser = buildMakeUser({Joi, ValidationError})

module.exports = {
    makeUser
  };
  