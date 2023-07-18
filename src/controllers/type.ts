export interface FormattedResponseParams {
    contentType?: string;
    statusCode: number;
    body: any;
    headers?: { [key: string]: string };
  }

  export interface FormatErrorParams {
    error: {
      httpStatusCode: number;
      message: string;
      name: string;
      errorCode?: string;
    };
  }

  export interface GreetActionParams {
    greet: () => any; // Replace 'any' with the actual return type of 'greet'.
    formatResponse: (params: FormattedResponseParams) => any; // Replace 'any' with the actual return type of 'formatResponse'.
    formatError: (params: FormatErrorParams) => any; // Replace 'any' with the actual return type of 'formatError'.
  }