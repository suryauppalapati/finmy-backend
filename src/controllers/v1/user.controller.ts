import { Request, Response, NextFunction } from "express";

const getUserDetails = (request: Request, response: Response, next: NextFunction) => {
  response.status(200).send("user details");
};

const updateUserDetails = (request: Request, response: Response, next: NextFunction) => {
  response.status(200).send("user details updated!");
};

const deleteUser = (request: Request, response: Response, next: NextFunction) => {
  response.status(200).send("user deleted");
};

export { getUserDetails, updateUserDetails, deleteUser };
