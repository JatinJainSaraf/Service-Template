import { FormatErrorParams, FormattedResponseParams } from "../type"
export interface makeCreateUserActionParams {
    Joi: any,
    ValidationError: any,
    createUser: any,
    formatResponse: (params: FormattedResponseParams) => any; // Replace 'any' with the actual return type of 'formatResponse'.
    formatError: (params: FormatErrorParams) => any; // Replace 'any' with the actual return type of 'formatError'.
}