module.exports = function buildMakeUser({Joi, ValidationError}) {
    return function makeUser({
      username
    }) {
        const schema = Joi.object({
            username: Joi.string()
              .regex(/^[a-zA-Z][a-zA-Z0-9]*$/)
              .min(1)
              .messages({
                'string.pattern.base':
                  'Username must be an alphanumeric string starting with a letter.',
                'string.min': 'Username must have a minimum length of 1 character.',
                'any.required': 'Username is required.',
              }),
          });
          const { value,error } = schema.validate({ username });
          if (error) {
            throw new ValidationError(error.message);
          }
  
  
      return Object.freeze({
        getUserName: () => value.username,
      });
    };
  };
  