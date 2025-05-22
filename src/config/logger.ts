import winston from "winston";

const { json, printf, combine, timestamp, colorize } = winston.format;

const logger = winston.createLogger({
  format:
    process.env.NODE_ENV === "production"
      ? combine(
          json(),
          timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
          printf(({ timestamp, level, message }) => {
            const output = { timestamp, level, message };
            return JSON.stringify(output);
          })
        )
      : combine(
          colorize(),
          timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
          printf(({ timestamp, level, message }) => {
            return `[${timestamp}] ${level}: ${message}`;
          })
        ),
  transports: [new winston.transports.Console()],
});

export default logger;
