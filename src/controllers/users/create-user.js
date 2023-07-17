function makeCreateUserAction({createUser, formatResponse, formatError, Joi, ValidationError}) {
    return async function createUserAction(httpRequest) {
        const {body: {username}} = httpRequest;
      try {
        validateInput({username})
        const user = await createUser({username});
        return formatResponse(
            {contentType: 'text/plain', statusCode: 200, body: user});
      } catch (e) {
        console.error(`Got error in createUser controller`, e);
        return formatError({error: e});
      }
    };
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
  
  module.exports = makeCreateUserAction;
  