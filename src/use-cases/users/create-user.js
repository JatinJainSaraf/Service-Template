const makeUser = require('../../entities').makeUser;

module.exports = function makeCreateUser({Joi, ValidationError, usersDb, jwt}) {
    return async function createUser({username}) {
        validateInput({username})
        const isUserNameExist = await usersDb.getUserByUserName({username});
        if(isUserNameExist){
            throw new ValidationError('This username already exists')
        }
        const {getUserName} = makeUser({username})
        const user = await usersDb.createUser({username: getUserName()});
        const token = jwt.sign({ userId: user.id }, 'authService', {
            expiresIn: '1d',
          });
          return {
            message: 'User created and logged in successfully.',
            token,
            userId: user.id,
          }
    }
    function validateInput({ username }) {
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
