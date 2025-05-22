import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import * as userController from "./user.controller";
import * as authController from "./auth.controller";

const checkHealth = (request: Request, response: Response, next: NextFunction) => {
  response.status(StatusCodes.OK).send({ Response: "OK" });
};

export { checkHealth, userController, authController };
