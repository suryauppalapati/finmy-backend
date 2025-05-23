import express, { Express, Request, Response } from "express";
import config from "./config";
import logger from "./config/logger";
import v1Router from "./routes/v1";
import { customErrorHandler, attachCorrelationId } from "./middlewares";

const app: Express = express();

app.use(attachCorrelationId);
app.use(express.json());
app.use("/api/v1", v1Router);

app.get("/", (request: Request, response: Response) => {
  response.status(200).send({ message: "OK" });
});

app.use(customErrorHandler);

app.listen(config.port || 3000, () => {
  logger.info(`Finmy server started running at Port: ${config.port || "3000"}`);
});
