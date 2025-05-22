import { NextFunction, Request, Response } from "express";

const customErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};

export default customErrorHandler;
