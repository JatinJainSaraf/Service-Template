const formatResponse = require('./format-response').formatResponse;
const formatError = require('./format-response').formatError;
const useCases = require('../use-cases');

const makeGreatAction = require('./greet');
const greetAction = makeGreatAction({formatError, formatResponse, greetUseCase: useCases.greet})

const userActions = require('./users')
const controller = Object.freeze({
    greetAction,
    userActions,
  });
module.exports=controller;
