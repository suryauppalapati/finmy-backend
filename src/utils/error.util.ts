import { StatusCodes } from "http-status-codes";

interface AppError extends Error {
  statusCode: number;
}

class BaseAppError extends Error implements AppError {
  statusCode: number;
  constructor(name: string, statusCode: number, message: string) {
    super(message);
    (this.name = name), (this.statusCode = statusCode);
  }
}

class InternalServerError extends BaseAppError {
  constructor(message: string) {
    super("InternalServerError", StatusCodes.INTERNAL_SERVER_ERROR, message);
  }
}

class AuthenticationError extends BaseAppError {
  constructor(message: string) {
    super("AuthenticationError", StatusCodes.UNAUTHORIZED, message);
  }
}

class AuthorizationError extends BaseAppError {
  constructor(message: string) {
    super("AuthorizationError", StatusCodes.FORBIDDEN, message);
  }
}

class BadRequestError extends BaseAppError {
  constructor(message: string) {
    super("BadRequestError", StatusCodes.BAD_REQUEST, message);
  }
}

export { InternalServerError, AuthenticationError, AuthorizationError, BadRequestError };
