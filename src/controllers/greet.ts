import { GreetActionParams } from "./type";
const makeGreetAction=({greet, formatResponse, formatError}: GreetActionParams)=> {
    return async function greetAction(httpRequest: {}) {
      try {
        const message = greet();
        return formatResponse(
            {contentType: 'text/plain', statusCode: 200, body: message});
      } catch (e) {
        console.error(`Got error in greetWelcome controller`, e);
        return formatError({error: e as any});
      }
    };
  }
  
 export default makeGreetAction;
  