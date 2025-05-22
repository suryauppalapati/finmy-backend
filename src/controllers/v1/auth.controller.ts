import { Request, Response, NextFunction } from "express";

const signinUser = (request: Request, response: Response, next: NextFunction) => {
  response.status(200).send("user is logged in!");
};

const signupUser = (request: Request, response: Response, next: NextFunction) => {
  response.status(200).send("user is signed up!");
};

export { signinUser, signupUser };
