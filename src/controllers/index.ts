const {formatError, formatResponse} = require('./format-response')
import makeGreetAction from './greet';
import userActions from './users';
import useCases from '../use-cases'
const greetAction = makeGreetAction({formatError, formatResponse, greet: useCases.greet})

const controller = Object.freeze({
    greetAction,
    userActions,
  });
export default controller;
