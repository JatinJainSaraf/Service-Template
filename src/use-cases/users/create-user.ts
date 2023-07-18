import makeUser from "../../entities";
import {makeCreateUserParams} from './type'
export default function makeCreateUser({ Joi, ValidationError, userDb, jwt }:makeCreateUserParams ) {
  return async function createUser({ username }: {username: string}) {
    validateInput({ username });
    const isUserNameExist = await userDb.getUserByUserName({ username });
    if (isUserNameExist) {
      throw new ValidationError('This username already exists');
    }
    const { getUserName } = makeUser({ username });
    const user = await userDb.createUser({ username: getUserName() });
    const token = jwt.sign({ userId: user.id }, 'authService', {
      expiresIn: '1d',
    });
    return {
      message: 'User created and logged in successfully.',
      token,
      userId: user.id,
    };
  };

  function validateInput({ username }: { username: string }) {
    const schema = Joi.object({
      username: Joi.string()
        .regex(/^[a-zA-Z][a-zA-Z0-9]*$/)
        .min(1)
        .required()
        .messages({
          'string.pattern.base':
            'Username must be an alphanumeric string starting with a letter.',
          'string.min': 'Username must have a minimum length of 1 character.',
          'any.required': 'Username is required.',
        }),
    });
    const { error } = schema.validate({ username });
    if (error) {
      throw new ValidationError(error.message);
    }
  }
}
