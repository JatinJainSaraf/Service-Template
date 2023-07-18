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

  export interface MakeGreetActionParams {
    greet: () => string; 
    formatResponse: (params: FormattedResponseParams) => any; 
    formatError: (params: FormatErrorParams) => any;
  }