import { FormatErrorParams, FormattedResponseParams } from './type';

export function formatResponse({
  contentType,
  statusCode,
  body,
  headers,
}: FormattedResponseParams) {
  const formattedResponse: {
    statusCode: number;
    headers: { [key: string]: string };
    body: any;
  } = {
    statusCode: statusCode,
    headers: headers ? headers : {},
    body: undefined,
  };

  if (body instanceof Error) {
    formattedResponse.body = {
      message: body.message,
      name: body.name,
      code: (body as { errorCode?: string }).errorCode,
    };
    formattedResponse.headers['content-type'] = 'application/json';
  } else {
    formattedResponse.body = body;
    formattedResponse.headers['content-type'] = contentType
      ? contentType
      : 'application/json';
  }

  return formattedResponse;
}

export function formatError({ error }: FormatErrorParams) {
  return formatResponse({
    statusCode: error.httpStatusCode,
    body: {
      message: error.message,
      name: error.name,
      code: error.errorCode,
    },
  });
}
