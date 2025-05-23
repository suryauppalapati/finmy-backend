import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import asyncLocalStorage from "@/config/localStorage";

const attachCorrelationId = (request: Request, response: Response, next: NextFunction) => {
  const correlationId = uuidv4();

  asyncLocalStorage.run({ correlationId }, () => {
    next();
  });
};

export default attachCorrelationId;
