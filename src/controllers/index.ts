import { formatError, formatResponse } from './format-response';
import makeGreetAction from './greet';
import userActions from './users';
import useCases from '../use-cases'
import { MakeGreetActionParams } from './type';
const greetAction = makeGreetAction({formatError, formatResponse, greet: useCases.greet} as MakeGreetActionParams)

const controller = Object.freeze({
    greetAction,
    userActions,
  });
export default controller;
