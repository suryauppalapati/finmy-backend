import getCorrelationId from "@/helpers/correlation.helper";
import winston from "winston";
import dailyFileRotate from "winston-daily-rotate-file";

const { json, printf, combine, timestamp, colorize } = winston.format;

const logger = winston.createLogger({
  format:
    process.env.NODE_ENV === "production"
      ? combine(
          json(),
          timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
          printf(({ timestamp, level, message }) => {
            const output = { timestamp, level, message, correlationId: getCorrelationId() };
            return JSON.stringify(output);
          })
        )
      : combine(
          colorize(),
          timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
          printf(({ timestamp, level, message }) => {
            return `[${timestamp}] ${level}: ${message} [correlationId=${getCorrelationId()}]`;
          })
        ),
  transports: [
    new winston.transports.Console(),
    new dailyFileRotate({
      filename: "logs/finmy-server-%DATE%.log",
      datePattern: "DD-MM-YYYY-HH:mm-ss",
      maxSize: "20m",
      maxFiles: "14d",
    }),
  ],
});

export default logger;
