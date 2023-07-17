function makeGreetAction({greetUseCase, formatResponse, formatError}) {
    return async function greetAction(httpRequest) {
      try {
        const message = greetUseCase();
        return formatResponse(
            {contentType: 'text/plain', statusCode: 200, body: message});
      } catch (e) {
        httpRequest.logger.error(`Got error in greetWelcome controller`, e);
        return formatError({error: e});
      }
    };
  }
  
  module.exports = makeGreetAction;
  