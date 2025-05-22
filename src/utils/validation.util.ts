import { ZodError } from "zod";
import { ErrorDetail } from "@/types/error.type";

const getErrorDetails = (errorObj: ZodError): ErrorDetail[] => {
  return errorObj.errors.map((err) => ({
    field: err.path.join("."),
    message: err.message,
  }));
};

export default getErrorDetails;
